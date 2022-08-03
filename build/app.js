"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const _utils_1 = __importDefault(require("@utils"));
const _services_1 = __importDefault(require("@services"));
const _config_1 = __importDefault(require("@config"));
const app = (0, express_1.default)();
console.log(_utils_1.default);
console.log(_services_1.default);
console.log(_config_1.default);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, helmet_1.default)());
app.get('/ok', (req, res) => {
    res.status(200).json({
        ok: true,
    });
});
const handleNotFound = (req, res, next) => {
    const error = new Error('endpoint not found');
    next(error);
};
const handleErrors = (err, req, res, next) => {
    res.status(500).json({
        ok: false,
        status: 500,
    });
};
app.use(handleNotFound);
app.use(handleErrors);
// eslint-disable-next-line no-console
app.listen(5423, () => console.log('server listening at: 5423'));
//# sourceMappingURL=app.js.map