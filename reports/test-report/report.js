$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Addition.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Calculator operations",
  "description": "",
  "id": "verify-calculator-operations",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify Addition",
  "description": "",
  "id": "verify-calculator-operations;verify-addition",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CC-001_03"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "click on clear",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I add \u003cN1\u003e and \u003cN2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see \u003cResult\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "verify-calculator-operations;verify-addition;",
  "rows": [
    {
      "cells": [
        "N1",
        "N2",
        "Result"
      ],
      "line": 12,
      "id": "verify-calculator-operations;verify-addition;;1"
    },
    {
      "cells": [
        "-234823",
        "345345",
        "111111"
      ],
      "line": 13,
      "id": "verify-calculator-operations;verify-addition;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Verify Addition",
  "description": "",
  "id": "verify-calculator-operations;verify-addition;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CC-001_03"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "click on clear",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I add -234823 and 345345",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see 111111",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("Division.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Calculator operations",
  "description": "",
  "id": "verify-calculator-operations",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify Division",
  "description": "",
  "id": "verify-calculator-operations;verify-division",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CC-001_02"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "click on clear",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I divide \u003cN1\u003e and \u003cN2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see \u003cResult\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "verify-calculator-operations;verify-division;",
  "rows": [
    {
      "cells": [
        "N1",
        "N2",
        "Result"
      ],
      "line": 12,
      "id": "verify-calculator-operations;verify-division;;1"
    },
    {
      "cells": [
        "4000",
        "200",
        "20"
      ],
      "line": 13,
      "id": "verify-calculator-operations;verify-division;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Verify Division",
  "description": "",
  "id": "verify-calculator-operations;verify-division;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CC-001_02"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "click on clear",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I divide 4000 and 200",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see 20",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("Multiplication.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Calculator operations",
  "description": "",
  "id": "verify-calculator-operations",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify Multiplication",
  "description": "",
  "id": "verify-calculator-operations;verify-multiplication",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CC-001_01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "click on clear",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I multiply \u003cN1\u003e and \u003cN2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see \u003cResult\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "verify-calculator-operations;verify-multiplication;",
  "rows": [
    {
      "cells": [
        "N1",
        "N2",
        "Result"
      ],
      "line": 12,
      "id": "verify-calculator-operations;verify-multiplication;;1"
    },
    {
      "cells": [
        "423",
        "200",
        "84600"
      ],
      "line": 13,
      "id": "verify-calculator-operations;verify-multiplication;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Verify Multiplication",
  "description": "",
  "id": "verify-calculator-operations;verify-multiplication;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CC-001_01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "click on clear",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I multiply 423 and 200",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see 84600",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("Subtraction.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Calculator operations",
  "description": "",
  "id": "verify-calculator-operations",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify Subtract",
  "description": "",
  "id": "verify-calculator-operations;verify-subtract",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CC-001_04"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "click on clear",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I subtract \u003cN1\u003e and \u003cN2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see \u003cResult\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "verify-calculator-operations;verify-subtract;",
  "rows": [
    {
      "cells": [
        "N1",
        "N2",
        "Result"
      ],
      "line": 12,
      "id": "verify-calculator-operations;verify-subtract;;1"
    },
    {
      "cells": [
        "234823",
        "-23094823",
        "23329646"
      ],
      "line": 13,
      "id": "verify-calculator-operations;verify-subtract;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Verify Subtract",
  "description": "",
  "id": "verify-calculator-operations;verify-subtract;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CC-001_04"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "click on clear",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I subtract 234823 and -23094823",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see 23329646",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});