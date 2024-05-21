"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdeaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const idea_service_1 = require("./idea.service");
const storage_1 = require("./storage");
const create_idea_dto_1 = require("./dto/create-idea.dto");
const update_idea_dto_1 = require("./dto/update-idea.dto");
let IdeaController = class IdeaController {
    constructor(ideaService) {
        this.ideaService = ideaService;
    }
    create(dto, image) {
        return this.ideaService.create(dto, image);
    }
    findAll() {
        return this.ideaService.findAll();
    }
    download(path, response) {
        return response.sendFile(path, { root: './db_images/ideas' });
    }
    findOne(id) {
        return this.ideaService.findOne(+id);
    }
    update(id, dto, image) {
        return this.ideaService.update(+id, dto, image);
    }
    remove(id) {
        return this.ideaService.delete(+id);
    }
};
exports.IdeaController = IdeaController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', { storage: storage_1.fileStorage })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_idea_dto_1.CreateIdeaDto, Object]),
    __metadata("design:returntype", Promise)
], IdeaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IdeaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/image/:path'),
    __param(0, (0, common_1.Param)('path')),
    __param(1, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], IdeaController.prototype, "download", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IdeaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', { storage: storage_1.fileStorage })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_idea_dto_1.UpdateIdeaDto, Object]),
    __metadata("design:returntype", Promise)
], IdeaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IdeaController.prototype, "remove", null);
exports.IdeaController = IdeaController = __decorate([
    (0, swagger_1.ApiTags)('idea'),
    (0, common_1.Controller)('idea'),
    __metadata("design:paramtypes", [idea_service_1.IdeaService])
], IdeaController);
//# sourceMappingURL=idea.controller.js.map