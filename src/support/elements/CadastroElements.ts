import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class CadastroElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getCampoNome(): Locator {
    return this.page.locator('input[name="name"]');
  }

  getCampoNomeSocial(): Locator {
    return this.page.locator('input[name="socialName"]');
  }

  getCampoGenero(): Locator {
    return this.page.locator('label[data-cy="labelFor__M"]');
  }

  getCampoAniversario(): Locator {
    return this.page.locator('input[name="birthDate"]');
  }

  getCampoCpf(): Locator {
    return this.page.locator('input[name="cpf"]');
  }

  getCampoTelefone(): Locator {
    return this.page.locator('input[name="phone"]');
  }

  getCampoEmail(): Locator {
    return this.page.locator('input[name="email"]');
  }

  getCampoSenha(): Locator {
    return this.page.locator('input[name="password"]');
  }

  getBotaoCadastrar(): Locator {
    return this.page.locator('button[type="submit"]');
  }

  getMessageOK(): Locator {
    return this.page.locator(
      'text=Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
    );
  }

  getErroCampoNome(): Locator {
    return this.page.locator('text=nome deve ser completo.');
  }

  getErroCampoAniversario(): Locator {
    return this.page.locator(
      'text=é necessário informar a data de nascimento.'
    );
  }

  getErroCampoCpf(): Locator {
    return this.page.locator('text=é necessário informar um CPF.');
  }

  getErroCampoTelefone(): Locator {
    return this.page.locator(
      'text=é necessário informar o número do telefone principal.'
    );
  }

  getErroCampoEmail(): Locator {
    return this.page.locator('text=é necessário informar um e-mail.');
  }

  getErroCadNome(): Locator {
    return this.page.locator('text=nome deve ser completo.');
  }

  getErroCadCpf(): Locator {
    return this.page.locator(
      'text=o CPF precisa ter 11 dígitos, por exemplo: 123.456.789-10'
    );
  }

  getErroCadTelefone(): Locator {
    return this.page.locator('text=número do telefone principal incompleto.');
  }

  getErroCadEmail(): Locator {
    return this.page.locator('text=email incompleto');
  }
}
