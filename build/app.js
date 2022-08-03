"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, helmet_1.default)());
app.get('/ok', (req, res, next) => {
    res.status(200).json({
        ok: true,
    });
});
app.listen(5423, () => console.log('server listening at: 5423'));
//# sourceMappingURL=app.js.map