'use strict';

define('ember-app/tests/acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s itogovaya peredelanaya должности l');

  (0, _qunit.test)('testing i-i-s-itogovaya-peredelanaya-должности-l', function (assert) {
    var _this = this;

    visit('/i-i-s-itogovaya-peredelanaya-должности-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s itogovaya peredelanaya единицы измер l');

  (0, _qunit.test)('testing i-i-s-itogovaya-peredelanaya-единицы-измер-l', function (assert) {
    var _this = this;

    visit('/i-i-s-itogovaya-peredelanaya-единицы-измер-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s itogovaya peredelanaya заказ пост l');

  (0, _qunit.test)('testing i-i-s-itogovaya-peredelanaya-заказ-пост-l', function (assert) {
    var _this = this;

    visit('/i-i-s-itogovaya-peredelanaya-заказ-пост-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s itogovaya peredelanaya заказы покуп l');

  (0, _qunit.test)('testing i-i-s-itogovaya-peredelanaya-заказы-покуп-l', function (assert) {
    var _this = this;

    visit('/i-i-s-itogovaya-peredelanaya-заказы-покуп-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s itogovaya peredelanaya клиенты l');

  (0, _qunit.test)('testing i-i-s-itogovaya-peredelanaya-клиенты-l', function (assert) {
    var _this = this;

    visit('/i-i-s-itogovaya-peredelanaya-клиенты-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s itogovaya peredelanaya контрагенты l');

  (0, _qunit.test)('testing i-i-s-itogovaya-peredelanaya-контрагенты-l', function (assert) {
    var _this = this;

    visit('/i-i-s-itogovaya-peredelanaya-контрагенты-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s itogovaya peredelanaya менеджер l');

  (0, _qunit.test)('testing i-i-s-itogovaya-peredelanaya-менеджер-l', function (assert) {
    var _this = this;

    visit('/i-i-s-itogovaya-peredelanaya-менеджер-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s itogovaya peredelanaya номенклатура l');

  (0, _qunit.test)('testing i-i-s-itogovaya-peredelanaya-номенклатура-l', function (assert) {
    var _this = this;

    visit('/i-i-s-itogovaya-peredelanaya-номенклатура-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s itogovaya peredelanaya организации l');

  (0, _qunit.test)('testing i-i-s-itogovaya-peredelanaya-организации-l', function (assert) {
    var _this = this;

    visit('/i-i-s-itogovaya-peredelanaya-организации-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s itogovaya peredelanaya отчет о зак l');

  (0, _qunit.test)('testing i-i-s-itogovaya-peredelanaya-отчет-о-зак-l', function (assert) {
    var _this = this;

    visit('/i-i-s-itogovaya-peredelanaya-отчет-о-зак-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s itogovaya peredelanaya план закупок l');

  (0, _qunit.test)('testing i-i-s-itogovaya-peredelanaya-план-закупок-l', function (assert) {
    var _this = this;

    visit('/i-i-s-itogovaya-peredelanaya-план-закупок-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s itogovaya peredelanaya склады l');

  (0, _qunit.test)('testing i-i-s-itogovaya-peredelanaya-склады-l', function (assert) {
    var _this = this;

    visit('/i-i-s-itogovaya-peredelanaya-склады-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s itogovaya peredelanaya сотрудники l');

  (0, _qunit.test)('testing i-i-s-itogovaya-peredelanaya-сотрудники-l', function (assert) {
    var _this = this;

    visit('/i-i-s-itogovaya-peredelanaya-сотрудники-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });

  QUnit.test('enums/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0441\u0442-\u043E\u043F\u043B\u0430\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'enums/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0441\u0442-\u043E\u043F\u043B\u0430\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('enums/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0441\u0442-\u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'enums/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0441\u0442-\u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/translations.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u043A-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u043A-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u043A-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u043A-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('services/offline-globals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/offline-globals.js should pass ESLint\n\n');
  });

  QUnit.test('services/store.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/store.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0441\u0442-\u043E\u043F\u043B\u0430\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0441\u0442-\u043E\u043F\u043B\u0430\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0441\u0442-\u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0441\u0442-\u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('ember-app/tests/helpers/ember-i18n/test-helpers', ['ember-i18n/test-support/-private/t', 'ember-i18n/test-support/-private/assert-translation'], function (_t2, _assertTranslation2) {
  'use strict';

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  Ember.Test.registerHelper('t', function (app, key, interpolations) {
    return (0, _t2.default)(app.__container__, key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  Ember.Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = (0, _t2.default)(app.__container__, key, interpolations);

    (0, _assertTranslation2.default)(element, key, text);
  });
});
define('ember-app/tests/helpers/ember-prop-types', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createComponent = createComponent;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var VERSION = Ember.VERSION;


  /**
   * Determine if we are on a version of Ember that includes Glimmer 2
   * @returns {Boolean} whether or not we are on Glimmer 2
   */
  function isGlimmer2() {
    var _VERSION$split = VERSION.split('.'),
        _VERSION$split2 = _slicedToArray(_VERSION$split, 2),
        major = _VERSION$split2[0],
        minor = _VERSION$split2[1];

    return parseInt(major) > 1 && parseInt(minor) > 9;
  }

  /**
   * Programitcally instantiate instance of component class
   * @param {Ember.Component} component - component class to instantiate
   * @returns {Ember.Component} instance of component class
   */
  function createComponent(component) {
    if (isGlimmer2()) {
      return component.create({ renderer: {} });
    }

    return component.create();
  }
});
define('ember-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-app/tests/helpers/start-app', 'ember-app/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('ember-app/tests/helpers/start-app', ['exports', 'ember-app/app', 'ember-app/config/environment', 'ember-flexberry/test-support'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ember-app/tests/test-helper', ['ember-app/app', 'ember-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('ember-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u043A-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u043A-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u043A-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u043A-test.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/unit/controllers/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-itogovaya-peredelanaya-должности-e', 'Unit | Controller | i-i-s-itogovaya-peredelanaya-должности-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-itogovaya-peredelanaya-должности-l', 'Unit | Controller | i-i-s-itogovaya-peredelanaya-должности-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-itogovaya-peredelanaya-единицы-измер-e', 'Unit | Controller | i-i-s-itogovaya-peredelanaya-единицы-измер-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-itogovaya-peredelanaya-единицы-измер-l', 'Unit | Controller | i-i-s-itogovaya-peredelanaya-единицы-измер-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-itogovaya-peredelanaya-заказ-пост-e', 'Unit | Controller | i-i-s-itogovaya-peredelanaya-заказ-пост-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-itogovaya-peredelanaya-заказ-пост-l', 'Unit | Controller | i-i-s-itogovaya-peredelanaya-заказ-пост-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-itogovaya-peredelanaya-заказы-покуп-e', 'Unit | Controller | i-i-s-itogovaya-peredelanaya-заказы-покуп-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-itogovaya-peredelanaya-заказы-покуп-l', 'Unit | Controller | i-i-s-itogovaya-peredelanaya-заказы-покуп-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-itogovaya-peredelanaya-клиенты-e', 'Unit | Controller | i-i-s-itogovaya-peredelanaya-клиенты-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-itogovaya-peredelanaya-клиенты-l', 'Unit | Controller | i-i-s-itogovaya-peredelanaya-клиенты-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-itogovaya-peredelanaya-контрагенты-e', 'Unit | Controller | i-i-s-itogovaya-peredelanaya-контрагенты-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-itogovaya-peredelanaya-контрагенты-l', 'Unit | Controller | i-i-s-itogovaya-peredelanaya-контрагенты-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-itogovaya-peredelanaya-менеджер-e', 'Unit | Controller | i-i-s-itogovaya-peredelanaya-менеджер-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-itogovaya-peredelanaya-менеджер-l', 'Unit | Controller | i-i-s-itogovaya-peredelanaya-менеджер-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-itogovaya-peredelanaya-номенклатура-e', 'Unit | Controller | i-i-s-itogovaya-peredelanaya-номенклатура-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-itogovaya-peredelanaya-номенклатура-l', 'Unit | Controller | i-i-s-itogovaya-peredelanaya-номенклатура-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-itogovaya-peredelanaya-организации-e', 'Unit | Controller | i-i-s-itogovaya-peredelanaya-организации-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-itogovaya-peredelanaya-организации-l', 'Unit | Controller | i-i-s-itogovaya-peredelanaya-организации-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-itogovaya-peredelanaya-отчет-о-зак-e', 'Unit | Controller | i-i-s-itogovaya-peredelanaya-отчет-о-зак-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-itogovaya-peredelanaya-отчет-о-зак-l', 'Unit | Controller | i-i-s-itogovaya-peredelanaya-отчет-о-зак-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-itogovaya-peredelanaya-план-закупок-e', 'Unit | Controller | i-i-s-itogovaya-peredelanaya-план-закупок-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-itogovaya-peredelanaya-план-закупок-l', 'Unit | Controller | i-i-s-itogovaya-peredelanaya-план-закупок-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-itogovaya-peredelanaya-склады-e', 'Unit | Controller | i-i-s-itogovaya-peredelanaya-склады-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-itogovaya-peredelanaya-склады-l', 'Unit | Controller | i-i-s-itogovaya-peredelanaya-склады-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-itogovaya-peredelanaya-сотрудники-e', 'Unit | Controller | i-i-s-itogovaya-peredelanaya-сотрудники-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-itogovaya-peredelanaya-сотрудники-l', 'Unit | Controller | i-i-s-itogovaya-peredelanaya-сотрудники-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/models/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-должности', 'Unit | Model | i-i-s-itogovaya-peredelanaya-должности', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-единицы-измер', 'Unit | Model | i-i-s-itogovaya-peredelanaya-единицы-измер', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-заказ-пост', 'Unit | Model | i-i-s-itogovaya-peredelanaya-заказ-пост', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-заказы-покуп', 'Unit | Model | i-i-s-itogovaya-peredelanaya-заказы-покуп', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-клиенты', 'Unit | Model | i-i-s-itogovaya-peredelanaya-клиенты', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-контрагенты', 'Unit | Model | i-i-s-itogovaya-peredelanaya-контрагенты', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-менеджер', 'Unit | Model | i-i-s-itogovaya-peredelanaya-менеджер', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-номенклатура', 'Unit | Model | i-i-s-itogovaya-peredelanaya-номенклатура', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-организации', 'Unit | Model | i-i-s-itogovaya-peredelanaya-организации', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'Unit | Model | i-i-s-itogovaya-peredelanaya-отчет-о-зак', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-план', 'Unit | Model | i-i-s-itogovaya-peredelanaya-план', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-план-закупок', 'Unit | Model | i-i-s-itogovaya-peredelanaya-план-закупок', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-склады', 'Unit | Model | i-i-s-itogovaya-peredelanaya-склады', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-сотрудники', 'Unit | Model | i-i-s-itogovaya-peredelanaya-сотрудники', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'Unit | Model | i-i-s-itogovaya-peredelanaya-т-ч-заказ', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u043A-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'Unit | Model | i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/routes/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-itogovaya-peredelanaya-должности-e', 'Unit | Route | i-i-s-itogovaya-peredelanaya-должности-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-itogovaya-peredelanaya-должности-l', 'Unit | Route | i-i-s-itogovaya-peredelanaya-должности-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-itogovaya-peredelanaya-единицы-измер-e', 'Unit | Route | i-i-s-itogovaya-peredelanaya-единицы-измер-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-itogovaya-peredelanaya-единицы-измер-l', 'Unit | Route | i-i-s-itogovaya-peredelanaya-единицы-измер-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-itogovaya-peredelanaya-заказ-пост-e', 'Unit | Route | i-i-s-itogovaya-peredelanaya-заказ-пост-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-itogovaya-peredelanaya-заказ-пост-l', 'Unit | Route | i-i-s-itogovaya-peredelanaya-заказ-пост-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-itogovaya-peredelanaya-заказы-покуп-e', 'Unit | Route | i-i-s-itogovaya-peredelanaya-заказы-покуп-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-itogovaya-peredelanaya-заказы-покуп-l', 'Unit | Route | i-i-s-itogovaya-peredelanaya-заказы-покуп-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-itogovaya-peredelanaya-клиенты-e', 'Unit | Route | i-i-s-itogovaya-peredelanaya-клиенты-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-itogovaya-peredelanaya-клиенты-l', 'Unit | Route | i-i-s-itogovaya-peredelanaya-клиенты-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-itogovaya-peredelanaya-контрагенты-e', 'Unit | Route | i-i-s-itogovaya-peredelanaya-контрагенты-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-itogovaya-peredelanaya-контрагенты-l', 'Unit | Route | i-i-s-itogovaya-peredelanaya-контрагенты-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-itogovaya-peredelanaya-менеджер-e', 'Unit | Route | i-i-s-itogovaya-peredelanaya-менеджер-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-itogovaya-peredelanaya-менеджер-l', 'Unit | Route | i-i-s-itogovaya-peredelanaya-менеджер-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-itogovaya-peredelanaya-номенклатура-e', 'Unit | Route | i-i-s-itogovaya-peredelanaya-номенклатура-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-itogovaya-peredelanaya-номенклатура-l', 'Unit | Route | i-i-s-itogovaya-peredelanaya-номенклатура-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-itogovaya-peredelanaya-организации-e', 'Unit | Route | i-i-s-itogovaya-peredelanaya-организации-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-itogovaya-peredelanaya-организации-l', 'Unit | Route | i-i-s-itogovaya-peredelanaya-организации-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-itogovaya-peredelanaya-отчет-о-зак-e', 'Unit | Route | i-i-s-itogovaya-peredelanaya-отчет-о-зак-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-itogovaya-peredelanaya-отчет-о-зак-l', 'Unit | Route | i-i-s-itogovaya-peredelanaya-отчет-о-зак-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-itogovaya-peredelanaya-план-закупок-e', 'Unit | Route | i-i-s-itogovaya-peredelanaya-план-закупок-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-itogovaya-peredelanaya-план-закупок-l', 'Unit | Route | i-i-s-itogovaya-peredelanaya-план-закупок-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-itogovaya-peredelanaya-склады-e', 'Unit | Route | i-i-s-itogovaya-peredelanaya-склады-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-itogovaya-peredelanaya-склады-l', 'Unit | Route | i-i-s-itogovaya-peredelanaya-склады-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-itogovaya-peredelanaya-сотрудники-e', 'Unit | Route | i-i-s-itogovaya-peredelanaya-сотрудники-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-itogovaya-peredelanaya-сотрудники-l', 'Unit | Route | i-i-s-itogovaya-peredelanaya-сотрудники-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-itogovaya-peredelanaya-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-должности', 'Unit | Serializer | i-i-s-itogovaya-peredelanaya-должности', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-itogovaya-peredelanaya-должности', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-itogovaya-peredelanaya-сост-оплаты', 'transform:i-i-s-itogovaya-peredelanaya-сост-отгрузки', 'model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-itogovaya-peredelanaya-\u0435\u0434\u0438\u043D\u0438\u0446\u044B-\u0438\u0437\u043C\u0435\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-единицы-измер', 'Unit | Serializer | i-i-s-itogovaya-peredelanaya-единицы-измер', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-itogovaya-peredelanaya-единицы-измер', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-itogovaya-peredelanaya-сост-оплаты', 'transform:i-i-s-itogovaya-peredelanaya-сост-отгрузки', 'model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u0441\u0442-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-заказ-пост', 'Unit | Serializer | i-i-s-itogovaya-peredelanaya-заказ-пост', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-itogovaya-peredelanaya-заказ-пост', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-itogovaya-peredelanaya-сост-оплаты', 'transform:i-i-s-itogovaya-peredelanaya-сост-отгрузки', 'model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-itogovaya-peredelanaya-\u0437\u0430\u043A\u0430\u0437\u044B-\u043F\u043E\u043A\u0443\u043F-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-заказы-покуп', 'Unit | Serializer | i-i-s-itogovaya-peredelanaya-заказы-покуп', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-itogovaya-peredelanaya-сост-оплаты', 'transform:i-i-s-itogovaya-peredelanaya-сост-отгрузки', 'model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-itogovaya-peredelanaya-\u043A\u043B\u0438\u0435\u043D\u0442\u044B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-клиенты', 'Unit | Serializer | i-i-s-itogovaya-peredelanaya-клиенты', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-itogovaya-peredelanaya-клиенты', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-itogovaya-peredelanaya-сост-оплаты', 'transform:i-i-s-itogovaya-peredelanaya-сост-отгрузки', 'model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-itogovaya-peredelanaya-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-контрагенты', 'Unit | Serializer | i-i-s-itogovaya-peredelanaya-контрагенты', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-itogovaya-peredelanaya-контрагенты', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-itogovaya-peredelanaya-сост-оплаты', 'transform:i-i-s-itogovaya-peredelanaya-сост-отгрузки', 'model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-itogovaya-peredelanaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-менеджер', 'Unit | Serializer | i-i-s-itogovaya-peredelanaya-менеджер', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-itogovaya-peredelanaya-менеджер', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-itogovaya-peredelanaya-сост-оплаты', 'transform:i-i-s-itogovaya-peredelanaya-сост-отгрузки', 'model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-itogovaya-peredelanaya-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-номенклатура', 'Unit | Serializer | i-i-s-itogovaya-peredelanaya-номенклатура', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-itogovaya-peredelanaya-номенклатура', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-itogovaya-peredelanaya-сост-оплаты', 'transform:i-i-s-itogovaya-peredelanaya-сост-отгрузки', 'model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-itogovaya-peredelanaya-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-организации', 'Unit | Serializer | i-i-s-itogovaya-peredelanaya-организации', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-itogovaya-peredelanaya-организации', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-itogovaya-peredelanaya-сост-оплаты', 'transform:i-i-s-itogovaya-peredelanaya-сост-отгрузки', 'model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-itogovaya-peredelanaya-\u043E\u0442\u0447\u0435\u0442-\u043E-\u0437\u0430\u043A-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'Unit | Serializer | i-i-s-itogovaya-peredelanaya-отчет-о-зак', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-itogovaya-peredelanaya-сост-оплаты', 'transform:i-i-s-itogovaya-peredelanaya-сост-отгрузки', 'model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-план', 'Unit | Serializer | i-i-s-itogovaya-peredelanaya-план', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-itogovaya-peredelanaya-план', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-itogovaya-peredelanaya-сост-оплаты', 'transform:i-i-s-itogovaya-peredelanaya-сост-отгрузки', 'model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-itogovaya-peredelanaya-\u043F\u043B\u0430\u043D-\u0437\u0430\u043A\u0443\u043F\u043E\u043A-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-план-закупок', 'Unit | Serializer | i-i-s-itogovaya-peredelanaya-план-закупок', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-itogovaya-peredelanaya-план-закупок', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-itogovaya-peredelanaya-сост-оплаты', 'transform:i-i-s-itogovaya-peredelanaya-сост-отгрузки', 'model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-itogovaya-peredelanaya-\u0441\u043A\u043B\u0430\u0434\u044B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-склады', 'Unit | Serializer | i-i-s-itogovaya-peredelanaya-склады', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-itogovaya-peredelanaya-склады', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-itogovaya-peredelanaya-сост-оплаты', 'transform:i-i-s-itogovaya-peredelanaya-сост-отгрузки', 'model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-itogovaya-peredelanaya-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-сотрудники', 'Unit | Serializer | i-i-s-itogovaya-peredelanaya-сотрудники', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-itogovaya-peredelanaya-сотрудники', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-itogovaya-peredelanaya-сост-оплаты', 'transform:i-i-s-itogovaya-peredelanaya-сост-отгрузки', 'model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'Unit | Serializer | i-i-s-itogovaya-peredelanaya-т-ч-заказ', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-itogovaya-peredelanaya-сост-оплаты', 'transform:i-i-s-itogovaya-peredelanaya-сост-отгрузки', 'model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-itogovaya-peredelanaya-\u0442-\u0447-\u0437\u0430\u043A\u0430\u0437-\u043F\u043E\u043A-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'Unit | Serializer | i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-itogovaya-peredelanaya-сост-оплаты', 'transform:i-i-s-itogovaya-peredelanaya-сост-отгрузки', 'model:i-i-s-itogovaya-peredelanaya-должности', 'model:i-i-s-itogovaya-peredelanaya-единицы-измер', 'model:i-i-s-itogovaya-peredelanaya-заказ-пост', 'model:i-i-s-itogovaya-peredelanaya-заказы-покуп', 'model:i-i-s-itogovaya-peredelanaya-клиенты', 'model:i-i-s-itogovaya-peredelanaya-контрагенты', 'model:i-i-s-itogovaya-peredelanaya-менеджер', 'model:i-i-s-itogovaya-peredelanaya-номенклатура', 'model:i-i-s-itogovaya-peredelanaya-организации', 'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак', 'model:i-i-s-itogovaya-peredelanaya-план-закупок', 'model:i-i-s-itogovaya-peredelanaya-план', 'model:i-i-s-itogovaya-peredelanaya-склады', 'model:i-i-s-itogovaya-peredelanaya-сотрудники', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/config/environment', [], function() {
  var prefix = 'ember-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
