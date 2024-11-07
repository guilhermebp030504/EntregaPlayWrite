import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import CadastroElements from '../elements/CadastroElements';
import BasePage from './BasePage';

export default class CadastroPage extends BasePage {
  readonly cadastroElements: CadastroElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.cadastroElements = new CadastroElements(page);
  }

  async preencherFormulario(): Promise<void> {
    await this.cadastroElements
      .getCampoNome()
      .fill(`${faker.person.firstName()} ${faker.person.lastName()}`);
    await this.cadastroElements
      .getCampoNomeSocial()
      .fill(faker.person.firstName());
    await this.cadastroElements.getCampoGenero().click();
    await this.cadastroElements.getCampoAniversario().fill('03/05/2004');
    await this.cadastroElements.getCampoCpf().fill('82299632506');
    await this.cadastroElements.getCampoTelefone().fill('48996536584');
    await this.cadastroElements.getCampoEmail().fill('sdfgtep0459@gmail.com');
    await this.cadastroElements.getCampoSenha().fill('sdA90@#4kfDF');
  }

  async validarFormularioPreenchido(): Promise<void> {
    const erroNome = await this.cadastroElements.getErroCampoNome();
    await expect(erroNome).not.toBeVisible();

    const erroAniversario =
      await this.cadastroElements.getErroCampoAniversario();
    await expect(erroAniversario).not.toBeVisible();

    const erroCpf = await this.cadastroElements.getErroCampoCpf();
    await expect(erroCpf).not.toBeVisible();

    const erroTelefone = await this.cadastroElements.getErroCampoTelefone();
    await expect(erroTelefone).not.toBeVisible();

    const erroEmail = await this.cadastroElements.getErroCampoEmail();
    await expect(erroEmail).not.toBeVisible();
  }

  async preencherFormularioInvalido(): Promise<void> {
    await this.cadastroElements
      .getCampoNome()
      .fill(`${faker.person.firstName()}`);
    await this.cadastroElements
      .getCampoNomeSocial()
      .fill(faker.person.firstName());
    await this.cadastroElements.getCampoGenero().click();
    await this.cadastroElements.getCampoAniversario().fill('03/05/5000');
    await this.cadastroElements.getCampoCpf().fill('3445454');
    await this.cadastroElements.getCampoTelefone().fill('489965365');
    await this.cadastroElements.getCampoEmail().fill('sdfgemp0459gmail.com');
    await this.cadastroElements.getCampoSenha().fill('123');
    await this.cadastroElements.getBotaoCadastrar().click();
  }

  async validarFormularioErrados(): Promise<void> {
    const erroCadNome = await this.cadastroElements.getErroCadNome();
    await expect(erroCadNome).toBeVisible();

    const erroCadCpf = await this.cadastroElements.getErroCadCpf();
    await expect(erroCadCpf).toBeVisible();

    const erroCadTelefone = await this.cadastroElements.getErroCadTelefone();
    await expect(erroCadTelefone).toBeVisible();

    const erroCadEmail = await this.cadastroElements.getErroCadEmail();
    await expect(erroCadEmail).toBeVisible();
  }
}
