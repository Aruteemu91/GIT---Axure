﻿$axure.loadCurrentPage({
  "url":"home.html",
  "generationDate":new Date(1511298644592.08),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable"],
  "page":{
    "packageId":"c8f69a8acbaa48e193d211b57c8c2def",
    "type":"Axure:Page",
    "name":"Home",
    "notes":{
},
    "style":{
      "baseStyle":"627587b6038d43cca051c114ac41ad32",
      "pageAlignment":"near",
      "fill":{
        "fillType":"solid",
        "color":0xFFFFFFFF},
      "image":null,
      "imageHorizontalAlignment":"near",
      "imageVerticalAlignment":"near",
      "imageRepeat":"auto",
      "favicon":null,
      "sketchFactor":"0",
      "colorStyle":"appliedColor",
      "fontName":"Applied Font",
      "borderWidth":"0"},
    "adaptiveStyles":{
},
    "interactionMap":{
},
    "diagram":{
      "objects":[{
          "id":"7f9833353df742bf9be9cf708bc54065",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":30,
              "y":106},
            "size":{
              "width":300,
              "height":144}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"35798f732fa141a1996469f49bf83070",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":30,
                  "y":106},
                "size":{
                  "width":300,
                  "height":144}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"d99aa68e10e74a3389921adf7b77bd3c",
          "label":"PAGE - 1",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "fontSize":"14px",
            "foreGroundFill":{
              "fillType":"solid",
              "color":0xFF000000,
              "opacity":1},
            "location":{
              "x":30,
              "y":70},
            "size":{
              "width":59,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"a68d835db3d44babb9fac845535cdfd0",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontSize":"14px",
                "foreGroundFill":{
                  "fillType":"solid",
                  "color":0xFF000000,
                  "opacity":1},
                "location":{
                  "x":30,
                  "y":70},
                "size":{
                  "width":59,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"Case 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"Open Page 1 in Current Window",
                      "target":{
                        "targetType":"page",
                        "url":"page_1.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]},
            "onMouseOver":{
              "description":"OnMouseOver",
              "cases":[{
                  "description":"Case 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"setFunction",
                      "description":"Set is selected of PAGE - 1 equal to &quot;true&quot;",
                      "expr":{
                        "exprType":"block",
                        "subExprs":[{
                            "exprType":"fcall",
                            "functionName":"SetCheckState",
                            "arguments":[{
                                "exprType":"pathLiteral",
                                "isThis":false,
                                "isFocused":false,
                                "isTarget":false,
                                "value":["d99aa68e10e74a3389921adf7b77bd3c"]},
{
                                "exprType":"stringLiteral",
                                "value":"true",
                                "stos":[]}]}]}}]}]},
            "onMouseOut":{
              "description":"OnMouseOut",
              "cases":[{
                  "description":"Case 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"setFunction",
                      "description":"Set is selected of PAGE - 1 equal to &quot;true&quot;",
                      "expr":{
                        "exprType":"block",
                        "subExprs":[{
                            "exprType":"fcall",
                            "functionName":"SetCheckState",
                            "arguments":[{
                                "exprType":"pathLiteral",
                                "isThis":false,
                                "isFocused":false,
                                "isTarget":false,
                                "value":["d99aa68e10e74a3389921adf7b77bd3c"]},
{
                                "exprType":"stringLiteral",
                                "value":"true",
                                "stos":[]}]}]}}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"5f5dd768a1fb453a9e85258bd0be5d5c",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":120,
              "y":70},
            "size":{
              "width":56,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"b4f1924b73854436a0ec2684d3c18df7",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":120,
                  "y":70},
                "size":{
                  "width":56,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"Case 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"Open Page 2 in New Window/Tab",
                      "target":{
                        "targetType":"page",
                        "url":"page_2.html",
                        "includeVariables":true},
                      "linkType":"new"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"54ca56209b2945ab92b7e987e2d24241",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":204,
              "y":70},
            "size":{
              "width":56,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"e0cd7c063870493bb2a8f424582e4b74",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":204,
                  "y":70},
                "size":{
                  "width":56,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"Case 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"Open Page 3 in Popup Window",
                      "target":{
                        "targetType":"page",
                        "url":"page_3.html",
                        "includeVariables":true},
                      "linkType":"popup",
                      "popup":{
                        "left":100,
                        "top":100,
                        "width":500,
                        "height":500,
                        "toolbar":false,
                        "scrollbars":false,
                        "location":false,
                        "status":false,
                        "menubar":false,
                        "directories":false,
                        "resizable":false,
                        "centerwindow":true}}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"ef37ea25bc754a84abcd1cf7cdb4fe59",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "fontName":"'Arial Полужирный', 'Arial'",
            "fontSize":"16px",
            "fontWeight":"700",
            "location":{
              "x":30,
              "y":30},
            "size":{
              "width":49,
              "height":19}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"a014682b89cc4bfe8308dd5c7e89633c",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontName":"'Arial Полужирный', 'Arial'",
                "fontSize":"16px",
                "fontWeight":"700",
                "location":{
                  "x":30,
                  "y":30},
                "size":{
                  "width":49,
                  "height":19}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}}]}},
  "masters":{
},
  "objectPaths":{
    "7f9833353df742bf9be9cf708bc54065":{
      "scriptId":"u0"},
    "35798f732fa141a1996469f49bf83070":{
      "scriptId":"u1"},
    "d99aa68e10e74a3389921adf7b77bd3c":{
      "scriptId":"u2"},
    "a68d835db3d44babb9fac845535cdfd0":{
      "scriptId":"u3"},
    "5f5dd768a1fb453a9e85258bd0be5d5c":{
      "scriptId":"u4"},
    "b4f1924b73854436a0ec2684d3c18df7":{
      "scriptId":"u5"},
    "54ca56209b2945ab92b7e987e2d24241":{
      "scriptId":"u6"},
    "e0cd7c063870493bb2a8f424582e4b74":{
      "scriptId":"u7"},
    "ef37ea25bc754a84abcd1cf7cdb4fe59":{
      "scriptId":"u8"},
    "a014682b89cc4bfe8308dd5c7e89633c":{
      "scriptId":"u9"}}});