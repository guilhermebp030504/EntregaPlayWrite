import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import CadastroPage from '../support/pages/CadastroPage';

test.describe('Cadastro de usuário na americanas', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let cadastroPage: CadastroPage;
  let BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.americanas_CAD_QA')
    .retrieveData();

  if (process.env.QA) {
    BASE_URL = TheConfig.fromFile(CONFIG)
      .andPath('application.americanas_CAD_QA')
      .retrieveData();
  } else if (process.env.HML) {
    BASE_URL = TheConfig.fromFile(CONFIG)
      .andPath('application.americanas_CAD_HML')
      .retrieveData();
  } else if (process.env.PRD) {
    BASE_URL = TheConfig.fromFile(CONFIG)
      .andPath('application.americanas_CAD_PRD')
      .retrieveData();
  }

  test.beforeEach(async ({ page }) => {
    cadastroPage = new CadastroPage(page);
    await page.goto(BASE_URL);
  });

  test('Preencher formulário de cadastro com informações válidas', async () => {
    await cadastroPage.preencherFormulario();
    await cadastroPage.validarFormularioPreenchido();
  });

  test('Preencher formulário de cadastro com dados inválidos', async () => {
    await cadastroPage.preencherFormularioInvalido();
    await cadastroPage.validarFormularioErrados();
  });
});
