import {createBdd} from "playwright-bdd";
import {baseFixture} from "../base/base.fixture";
import { FormPO } from './form.po';

const { When } = createBdd(baseFixture)

When(/^I select gender as (Male|Female|Other)$/, async function({ page }, gender: 'Male' | 'Female' | 'Other') {
  const formPage = new FormPO(page);
  await formPage.selectGender(gender);
});

When(/^I select hobby as (Sports|Reading|Music)$/, async function({ page }, hobby: 'Sports' | 'Reading' | 'Music') {
  const formPage = new FormPO(page);
  await formPage.selectHobby(hobby);
});

When(/^I deselect hobby as (Sports|Reading|Music)$/, async function({ page }, hobby: 'Sports' | 'Reading' | 'Music') {
  const formPage = new FormPO(page);
  await formPage.deselectHobby(hobby);
});

When(/^I upload a picture from "([^"]*)"$/, async function({ page }, filePath: string) {
  const formPage = new FormPO(page);
  await formPage.uploadPicture(filePath);
});

When(/^I select state as "([^"]*)"$/, async function({ page }, state: string) {
  const formPage = new FormPO(page);
  await formPage.selectState(state);
});

When(/^I select city as "([^"]*)"$/, async function({ page }, city: string) {
  const formPage = new FormPO(page);
  await formPage.selectCity(city);
});

When(/^I click the submit button$/, async function({ page }) {
  const formPage = new FormPO(page);
  await formPage.clickSubmit();
});

When(/^I fill the (first name|last name|email|mobile number|date of birth|subjects|current address) in form with "([^"]*)"$/, async function({ page }, fieldName: string, value: string) {
  const formPage = new FormPO(page);
  const normalizedFieldName = fieldName.toLowerCase().trim();

  switch (normalizedFieldName) {
    case 'first name':
      await formPage.fillFirstName(value);
      break;
    case 'last name':
      await formPage.fillLastName(value);
      break;
    case 'email':
      await formPage.fillEmail(value);
      break;
    case 'mobile number':
      await formPage.fillMobileNumber(value);
      break;
    case 'date of birth':
      await formPage.fillDateOfBirth(value);
      break;
    case 'subjects':
      await formPage.fillSubjects(value);
      break;
    case 'current address':
      await formPage.fillCurrentAddress(value);
      break;
    default:
      throw new Error(`Unknown field name: ${fieldName}`);
  }
});
