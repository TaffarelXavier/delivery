webpackHotUpdate("static\\development\\pages\\[id].js",{

/***/ "./components/Produtos/index.js":
/*!**************************************!*\
  !*** ./components/Produtos/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Produtos; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/AddShoppingCart */ "./node_modules/@material-ui/icons/AddShoppingCart.js");
/* harmony import */ var _material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_RemoveShoppingCart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/RemoveShoppingCart */ "./node_modules/@material-ui/icons/RemoveShoppingCart.js");
/* harmony import */ var _material_ui_icons_RemoveShoppingCart__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RemoveShoppingCart__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");




var _jsxFileName = "D:\\node\\delivery\\components\\Produtos\\index.js";











 //values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 },

var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  var _imageBox, _bigAvatar;

  return {
    root: {
      border: "0px solid #ccc",
      marginBottom: 4,
      boxShadow: theme.shadows[3],
      backgroundColor: "rgba(245,245,245,0.8)"
    },
    imageBox: (_imageBox = {
      width: "100%",
      height: 140,
      flex: 1
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_imageBox, theme.breakpoints.up("xs"), {
      border: "0px solid green"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_imageBox, theme.breakpoints.up("sm"), {
      border: "0px solid red"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_imageBox, theme.breakpoints.up("md"), {
      border: "0px solid lime"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_imageBox, theme.breakpoints.up("lg"), {
      border: "0px solid gold"
    }), _imageBox),
    bigAvatar: (_bigAvatar = {
      height: 100,
      borderRadius: 5
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_bigAvatar, theme.breakpoints.up("xs"), {
      border: "1px solid green",
      margin: 0,
      width: 80
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_bigAvatar, theme.breakpoints.up("sm"), {
      margin: 10,
      width: 100
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_bigAvatar, theme.breakpoints.up("md"), {
      margin: 10,
      width: 100
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_bigAvatar, theme.breakpoints.up("lg"), {
      margin: 10,
      width: 100
    }), _bigAvatar),
    quantidade: {
      textAlign: "right",
      width: 30,
      paddingTop: 5,
      paddingBottom: 5,
      display: "inline",
      border: "0",
      borderBottom: "0px solid #ccc"
    },
    cardAvatar: {
      border: "1px solid red"
    },
    cardContent: {
      border: "1px solid lime"
    },
    cardActions: {
      border: "1px solid blue"
    },
    valorUnitario: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({
      border: "0px solid red",
      paddingRight: 12
    }, theme.breakpoints.up("xs"), {
      fontWeight: "bold"
    }),
    subtotal: {
      border: "0px solid red",
      paddingRight: 12,
      fontSize: "12px"
    },
    mdlCard: {
      flexDirection: "column",
      fontSize: "16px",
      fontWeight: 400,
      overflow: "hidden",
      zIndex: 1,
      position: "relative",
      background: "#fff",
      borderRadius: "2px",
      boxSizing: "border-box"
    },
    cardItemMenu: "\n  width: 96%;\n    margin: 10px auto;\n    min-height: 10px;\n"
  };
});
/**
 * Component: Produtos
 */

function Produtos(props) {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      quantidade = _useState2[0],
      setQuantidade = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      valorTotal = _useState4[0],
      setValorTotal = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      observacao = _useState6[0],
      setObservacao = _useState6[1];

  function addProduct() {
    var products = [];

    if (localStorage.getItem("products")) {
      products = JSON.parse(localStorage.getItem("products"));
    } //Desestruturação Javascript


    var id = props.id,
        nome = props.nome,
        imagem = props.imagem,
        precoUnitario = props.precoUnitario,
        descricao = props.descricao; //Pega o index

    var objIndex = products.findIndex(function (pedido) {
      return pedido.productId === id;
    }); //Caso não exista

    if (objIndex === -1) {
      products.push({
        productId: id,
        nome: nome,
        imagem: imagem,
        quantidade: quantidade + 1,
        observacao: observacao,
        preco: precoUnitario,
        descricao: descricao
      });
      localStorage.setItem("products", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(products));
    } else {
      products[objIndex].productId = id;
      products[objIndex].quantidade = quantidade + 1;
      products[objIndex].observacao = observacao;
      products[objIndex].nome = nome;
      products[objIndex].imagem = imagem;
      products[objIndex].preco = precoUnitario;
      products[objIndex].descricao = descricao;
      localStorage.setItem("products", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(products));
    }
  }

  function add() {
    var quant = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(quantidade) + 1;
    setQuantidade(quant);
    addProduct();
    setValorTotal((props.precoUnitario * quant).toFixed(2));
  }

  function subtract() {
    var quant = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(quantidade) - 1;
    setQuantidade(quant);
    addProduct();
    setValorTotal(props.precoUnitario * quant);
  }

  function onChangeQuantidade(ev) {
    var quant = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(ev.target.value);

    setQuantidade(quant);
    addProduct();
    setValorTotal((props.precoUnitario * _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(quant)).toFixed(2));
  }

  function alterarTextoTextArea(ev) {
    setObservacao(ev.target.value);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (quantidade <= 0 || isNaN(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(quantidade))) {
      setValorTotal(0);
      setQuantidade(0);
    } //props.callbackParent(quantidade);

  }, [quantidade]);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: classes.cardItemMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: classes.mdlCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_15__["default"], {
    alt: "Remy Sharp",
    src: props.imagem,
    className: classes.bigAvatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, "R$ 16,00"))));
  {
    /*
    <Grid
      container
      item
      direction="row"
      alignItems="stretch"
      alignContent="flex-start"
      xs={12}
      sm={12}
      md={12}
      lg={12}
      className={classes.root}
      id={props.id}
      title={"Clique para entrar em " + props.nome}
    >
      <Grid xs={3} sm={3} md={3} lg={2} item>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.imageBox}
        >
          <Avatar
            alt="Remy Sharp"
            src={props.imagem}
            className={classes.bigAvatar}
          />
        </Grid>
      </Grid>
      <Grid xs={5} sm={5} md={6} lg={7} item className={classes.cardContent}>
        <Grid item>
          <Typography>
            <b>{props.nome}</b>
          </Typography>
          <sub>
            <strong>{props.medida}</strong>
          </sub>
          <Typography>{props.descricao}</Typography>
        </Grid>
        {observacao.length === 0 && (
          <>
            <br />
            <br />
            <br />
          </>
        )}
        <Grid container wrap="nowrap">
          <FormControl fullWidth>
            <InputLabel htmlFor="my-input">Observação:</InputLabel>
            <Input
              onChange={ev => {
                alterarTextoTextArea(ev);
              }}
              value={observacao}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid
        xs={4}
        sm={4}
        md={3}
        lg={3}
        item
        container
        alignItems="baseline"
        justify="flex-end"
        className={classes.cardActions}
      >
        <Grid item>
          <Typography className={classes.valorUnitario}>
            <b>
              Preço: R${" "}
              {props.precoUnitario != undefined
                ? props.precoUnitario.toFixed(2)
                : null}
            </b>
          </Typography>
        </Grid>
        <Grid item>
          <IconButton
            onClick={subtract}
            disabled={quantidade < 1}
            color="primary"
            aria-label="add to shopping cart"
          >
            <RemoveShoppingCartIcon />
          </IconButton>
          <input
            type="number"
            onChange={ev => onChangeQuantidade(ev)}
            value={quantidade}
            className={classes.quantidade}
          />
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            onClick={add}
          >
            <AddShoppingCartIcon />
          </IconButton>
        </Grid>
        <br />
        <Grid item>
          <br />
          <Typography className={classes.subtotal}>
            {quantidade > 0 && <> Sub Total: R$ {valorTotal}</>}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
    */
  }
}

/***/ })

})
//# sourceMappingURL=[id].js.33a7b14d950505617b4b.hot-update.js.map