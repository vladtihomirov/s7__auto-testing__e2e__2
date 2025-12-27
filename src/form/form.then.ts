import {createBdd} from "playwright-bdd";
import {baseFixture} from "../base/base.fixture";
import {expect} from "@playwright/test";
import {FormPO} from "./form.po";

const { Then } = createBdd(baseFixture);

Then(/^the (first name|last name|email|mobile number|date of birth|subjects|current address) field should contain "([^"]*)"$/, async function({ page }, fieldName: string, value: string) {
  const formPage = new FormPO(page);
  const normalizedFieldName = fieldName.toLowerCase().trim();
  
  switch (normalizedFieldName) {
    case 'first name':
      expect(await formPage.getFirstName()).toBe(value);
      break;
    case 'last name':
      expect(await formPage.getLastName()).toBe(value);
      break;
    case 'email':
      expect(await formPage.getEmail()).toBe(value);
      break;
    case 'mobile number':
      expect(await formPage.getMobileNumber()).toBe(value);
      break;
    case 'date of birth':
      expect(await formPage.getDateOfBirth()).toBe(value);
      break;
    case 'subjects':
      expect(await formPage.getSubjects()).toBe(value);
      break;
    case 'current address':
      expect(await formPage.getCurrentAddress()).toBe(value);
      break;
    default:
      throw new Error(`Unknown field name: ${fieldName}`);
  }
});

Then(/^gender should be selected as (Male|Female|Other)$/, async function({ page }, gender: 'Male' | 'Female' | 'Other') {
  const formPage = new FormPO(page);
  expect(await formPage.isGenderSelected(gender)).toBe(true);
});

Then(/^gender should not be selected as (Male|Female|Other)$/, async function({ page }, gender: 'Male' | 'Female' | 'Other') {
  const formPage = new FormPO(page);
  expect(await formPage.isGenderSelected(gender)).toBe(false);
});

Then(/^hobby (Sports|Reading|Music) should be selected$/, async function({ page }, hobby: 'Sports' | 'Reading' | 'Music') {
  const formPage = new FormPO(page);
  expect(await formPage.isHobbySelected(hobby)).toBe(true);
});

Then(/^hobby (Sports|Reading|Music) should not be selected$/, async function({ page }, hobby: 'Sports' | 'Reading' | 'Music') {
  const formPage = new FormPO(page);
  expect(await formPage.isHobbySelected(hobby)).toBe(false);
});

Then(/^the field "([^"]*)" should be valid$/, async function({ page }, fieldId: string) {
  const formPage = new FormPO(page);
  expect(await formPage.isFieldValid(fieldId)).toBe(true);
});

Then(/^the field "([^"]*)" should be invalid$/, async function({ page }, fieldId: string) {
  const formPage = new FormPO(page);
  expect(await formPage.isFieldInvalid(fieldId)).toBe(true);
});

Then(/^the form submission should be successful$/, async function({ page }) {
  const formPage = new FormPO(page);
  expect(await formPage.isSubmissionModalVisible()).toBe(true);
});

Then(/^the form submission should not be successful$/, async function({ page }) {
  const formPage = new FormPO(page);
  expect(await formPage.isSubmissionModalVisible()).toBe(false);
});

Then(/^the submission modal should contain "([^"]*)"$/, async function({ page }, text: string) {
  const formPage = new FormPO(page);
  const modalText = await formPage.getSubmissionModalText();
  expect(modalText).toContain(text);
});

Then(/^the submission modal should be visible$/, async function({ page }) {
  const formPage = new FormPO(page);
  expect(await formPage.isSubmissionModalVisible()).toBe(true);
});

Then(/^the submission modal should not be visible$/, async function({ page }) {
  const formPage = new FormPO(page);
  expect(await formPage.isSubmissionModalVisible()).toBe(false);
});
