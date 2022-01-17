'use strict';

import { initQuestionPage } from './pages/questionPage.js';
import { USER_INTERFACE_ID } from './constants.js';

export const router = (page) => {
  const UserInterfaceElement = document.getElementById(USER_INTERFACE_ID);
  UserInterfaceElement.innerHTML = '';

  switch (page) {
    case 'question':
      initQuestionPage(UserInterfaceElement);
      break;
  }
};
