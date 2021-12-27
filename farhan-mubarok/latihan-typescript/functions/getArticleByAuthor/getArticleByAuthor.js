"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getData_1 = __importDefault(require("../getData/getData"));
const getArticleByAuthor = (data) => {
    const filteredData = data.filter((item) => item.author.name === 'Farhan');
    console.log((0, getData_1.default)(filteredData));
};
exports.default = getArticleByAuthor;
