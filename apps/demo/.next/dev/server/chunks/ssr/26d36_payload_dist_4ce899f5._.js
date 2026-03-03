module.exports = [
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "APIError",
    ()=>APIError,
    "APIErrorName",
    ()=>APIErrorName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-rsc] (ecmascript) <export a as status>");
;
let APIErrorName = 'APIError';
class ExtendableError extends Error {
    data;
    isOperational;
    isPublic;
    status;
    constructor(message, status, data, isPublic){
        super(message, {
            // show data in cause
            cause: data
        });
        APIErrorName = this.constructor.name;
        this.name = this.constructor.name;
        this.message = message;
        this.status = status;
        this.data = data;
        this.isPublic = isPublic;
        this.isOperational = true; // This is required since bluebird 4 doesn't append it anymore.
        Error.captureStackTrace(this, this.constructor);
    }
}
class APIError extends ExtendableError {
    /**
   * Creates an API error.
   * @param {string} message - Error message.
   * @param {number} status - HTTP status code of error.
   * @param {object} data - response data to be returned.
   * @param {boolean} isPublic - Whether the message should be visible to user or not.
   */ constructor(message, status = __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].INTERNAL_SERVER_ERROR, data = null, isPublic){
        super(message, status, data, typeof isPublic === 'boolean' ? isPublic : status !== __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].INTERNAL_SERVER_ERROR);
    }
} //# sourceMappingURL=APIError.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/Forbidden.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Forbidden",
    ()=>Forbidden
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/@payloadcms/translations/dist/languages/en.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-rsc] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
;
;
;
class Forbidden extends __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(t){
        super(t ? t('error:notAllowedToPerformAction') : __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["en"].translations.error.notAllowedToPerformAction, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].FORBIDDEN);
    }
} //# sourceMappingURL=Forbidden.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/AuthenticationError.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthenticationError",
    ()=>AuthenticationError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/@payloadcms/translations/dist/languages/en.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-rsc] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
;
;
;
class AuthenticationError extends __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(t, loginWithUsername){
        super(t ? `${loginWithUsername ? t('error:usernameOrPasswordIncorrect') : t('error:emailOrPasswordIncorrect')}` : __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["en"].translations.error.emailOrPasswordIncorrect, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].UNAUTHORIZED);
    }
} //# sourceMappingURL=AuthenticationError.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/LockedAuth.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LockedAuth",
    ()=>LockedAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/@payloadcms/translations/dist/languages/en.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-rsc] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
;
;
;
class LockedAuth extends __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(t){
        super(t ? t('error:userLocked') : __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["en"].translations.error.userLocked, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].UNAUTHORIZED);
    }
} //# sourceMappingURL=LockedAuth.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/UnverifiedEmail.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UnverifiedEmail",
    ()=>UnverifiedEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/@payloadcms/translations/dist/languages/en.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-rsc] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
;
;
;
class UnverifiedEmail extends __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"] {
    constructor({ t }){
        super(t ? t('error:unverifiedEmail') : __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["en"].translations.error.unverifiedEmail, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].FORBIDDEN);
    }
} //# sourceMappingURL=UnverifiedEmail.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/ValidationError.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ValidationError",
    ()=>ValidationError,
    "ValidationErrorName",
    ()=>ValidationErrorName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/@payloadcms/translations/dist/languages/en.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-rsc] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
;
;
;
let ValidationErrorName = 'ValidationError';
class ValidationError extends __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(results, t){
        const message = t ? t('error:followingFieldsInvalid', {
            count: results.errors.length
        }) : results.errors.length === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["en"].translations.error.followingFieldsInvalid_one : __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["en"].translations.error.followingFieldsInvalid_other;
        const req = results.req;
        // delete to avoid logging the whole req
        delete results['req'];
        super(`${message} ${results.errors.map((f)=>{
            if (f.label) {
                if (typeof f.label === 'function') {
                    if (!req || !req.i18n || !req.t) {
                        return f.path;
                    }
                    return f.label({
                        i18n: req.i18n,
                        t: req.t
                    });
                }
                if (typeof f.label === 'object') {
                    if (req?.i18n?.language) {
                        return f.label[req.i18n.language];
                    }
                    return f.label[Object.keys(f.label)[0]];
                }
                return f.label;
            }
            return f.path;
        }).join(', ')}`, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].BAD_REQUEST, results);
        ValidationErrorName = this.constructor.name;
    }
} //# sourceMappingURL=ValidationError.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/MissingEditorProp.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MissingEditorProp",
    ()=>MissingEditorProp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
;
;
class MissingEditorProp extends __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(field){
        super(`RichText field${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) ? ` "${field.name}"` : ''} is missing the editor prop. For sub-richText fields, the editor props is required, as it would otherwise create infinite recursion.`);
    }
} //# sourceMappingURL=MissingEditorProp.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/QueryError.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryError",
    ()=>QueryError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-rsc] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
;
;
class QueryError extends __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(results){
        const message = `The following path${results.length === 1 ? '' : 's'} cannot be queried:`;
        super(`${message} ${results.map((err)=>err.path).join(', ')}`, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].BAD_REQUEST, results);
    }
} //# sourceMappingURL=QueryError.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/NotFound.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotFound",
    ()=>NotFound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/@payloadcms/translations/dist/languages/en.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-rsc] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
;
;
;
class NotFound extends __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(t){
        super(t ? t('general:notFound') : __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["en"].translations.general.notFound, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].NOT_FOUND);
    }
} //# sourceMappingURL=NotFound.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/FileRetrievalError.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileRetrievalError",
    ()=>FileRetrievalError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-rsc] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
;
;
class FileRetrievalError extends __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(t, message){
        let msg = t ? t('error:problemUploadingFile') : 'There was a problem while retrieving the file.';
        if (message) {
            msg += ` ${message}`;
        }
        super(msg, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].INTERNAL_SERVER_ERROR);
    }
} //# sourceMappingURL=FileRetrievalError.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/FileUploadError.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileUploadError",
    ()=>FileUploadError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/@payloadcms/translations/dist/languages/en.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-rsc] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
;
;
;
class FileUploadError extends __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(t){
        super(t ? t('error:problemUploadingFile') : __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["en"].translations.error.problemUploadingFile, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].BAD_REQUEST);
    }
} //# sourceMappingURL=FileUploadError.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/MissingFile.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MissingFile",
    ()=>MissingFile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/@payloadcms/translations/dist/languages/en.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-rsc] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
;
;
;
class MissingFile extends __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(t){
        super(t ? t('error:noFilesUploaded') : __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["en"].translations.error.noFilesUploaded, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].BAD_REQUEST);
    }
} //# sourceMappingURL=MissingFile.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/UnauthorizedError.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UnauthorizedError",
    ()=>UnauthorizedError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/@payloadcms/translations/dist/languages/en.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-rsc] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
;
;
;
class UnauthorizedError extends __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(t){
        super(t ? t('error:unauthorized') : __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["en"].translations.error.unauthorized, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].UNAUTHORIZED);
    }
} //# sourceMappingURL=UnauthorizedError.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/ErrorDeletingFile.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorDeletingFile",
    ()=>ErrorDeletingFile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/@payloadcms/translations/dist/languages/en.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-rsc] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
;
;
;
class ErrorDeletingFile extends __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(t){
        super(t ? t('error:deletingFile') : __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["en"].translations.error.deletingFile, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].INTERNAL_SERVER_ERROR);
    }
} //# sourceMappingURL=ErrorDeletingFile.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/Locked.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Locked",
    ()=>Locked
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-rsc] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
;
;
class Locked extends __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(message){
        super(message, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].LOCKED);
    }
} //# sourceMappingURL=Locked.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/InvalidConfiguration.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvalidConfiguration",
    ()=>InvalidConfiguration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-rsc] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
;
;
class InvalidConfiguration extends __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(message){
        super(message, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].INTERNAL_SERVER_ERROR);
    }
} //# sourceMappingURL=InvalidConfiguration.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/DuplicateFieldName.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DuplicateFieldName",
    ()=>DuplicateFieldName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
;
class DuplicateFieldName extends __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(fieldName){
        super(`A field with the name '${fieldName}' was found multiple times on the same level. Field names must be unique.`);
    }
} //# sourceMappingURL=DuplicateFieldName.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/InvalidFieldName.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvalidFieldName",
    ()=>InvalidFieldName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
;
class InvalidFieldName extends __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(field, fieldName){
        super(`Field ${field.label} has invalid name '${fieldName}'. Field names can not include periods (.) and must be alphanumeric.`);
    }
} //# sourceMappingURL=InvalidFieldName.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/InvalidFieldRelationship.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvalidFieldRelationship",
    ()=>InvalidFieldRelationship
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
;
class InvalidFieldRelationship extends __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(field, relationship){
        super(`Field ${field.label} has invalid relationship '${relationship}'.`);
    }
} //# sourceMappingURL=InvalidFieldRelationship.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/MissingFieldType.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MissingFieldType",
    ()=>MissingFieldType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
;
;
class MissingFieldType extends __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(field){
        super(`Field${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) ? ` "${field.name}"` : ''} is either missing a field type or it does not match an available field type`);
    }
} //# sourceMappingURL=MissingFieldType.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/ReservedFieldName.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReservedFieldName",
    ()=>ReservedFieldName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
;
class ReservedFieldName extends __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(field, fieldName){
        super(`Field ${field.label} has reserved name '${fieldName}'.`);
    }
} //# sourceMappingURL=ReservedFieldName.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/InvalidFieldJoin.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvalidFieldJoin",
    ()=>InvalidFieldJoin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
;
class InvalidFieldJoin extends __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(field){
        super(`Invalid join field ${field.name}. The config does not have a field '${field.on}' in collection '${field.collection}'.`);
    }
} //# sourceMappingURL=InvalidFieldJoin.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/TimestampsRequired.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TimestampsRequired",
    ()=>TimestampsRequired
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
;
class TimestampsRequired extends __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(collection){
        super(`Timestamps are required in the collection ${collection.slug} because you have opted in to Versions.`);
    }
} //# sourceMappingURL=TimestampsRequired.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/DuplicateCollection.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DuplicateCollection",
    ()=>DuplicateCollection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
;
class DuplicateCollection extends __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(propertyName, duplicate){
        super(`Collection ${propertyName} already in use: "${duplicate}"`);
    }
} //# sourceMappingURL=DuplicateCollection.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/translations/getLocalI18n.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLocalI18n",
    ()=>getLocalI18n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$init$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/@payloadcms/translations/dist/utilities/init.js [app-rsc] (ecmascript)");
;
const getLocalI18n = async ({ config, language })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$init$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initI18n"])({
        config: config.i18n,
        context: 'api',
        language
    }); //# sourceMappingURL=getLocalI18n.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/combineQueries.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "combineQueries",
    ()=>combineQueries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/auth/types.js [app-rsc] (ecmascript)");
;
const combineQueries = (where, access)=>{
    if (!where && !access) {
        return {};
    }
    const and = where ? [
        where
    ] : [];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasWhereAccessResult"])(access)) {
        and.push(access);
    }
    return {
        and
    };
}; //# sourceMappingURL=combineQueries.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/getLocalizedPaths.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLocalizedPaths",
    ()=>getLocalizedPaths
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
;
;
function getLocalizedPaths({ collectionSlug, fields, globalSlug, incomingPath, locale, overrideAccess = false, parentIsLocalized, payload }) {
    const pathSegments = incomingPath.split('.');
    const localizationConfig = payload.config.localization;
    let paths = [
        {
            collectionSlug,
            complete: false,
            // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
            field: undefined,
            fields,
            globalSlug,
            invalid: false,
            parentIsLocalized: parentIsLocalized,
            path: ''
        }
    ];
    for(let i = 0; i < pathSegments.length; i += 1){
        const segment = pathSegments[i];
        const lastIncompletePath = paths.find(({ complete })=>!complete);
        if (lastIncompletePath) {
            const { path } = lastIncompletePath;
            let currentPath = path ? `${path}.${segment}` : segment;
            let fieldsToSearch;
            let _parentIsLocalized = parentIsLocalized;
            let matchedField;
            if (lastIncompletePath?.field?.type === 'blocks') {
                if (segment === 'blockType') {
                    matchedField = {
                        name: 'blockType',
                        type: 'text'
                    };
                } else {
                    for (const _block of lastIncompletePath.field.blockReferences ?? lastIncompletePath.field.blocks){
                        let block;
                        if (typeof _block === 'string') {
                            block = payload.blocks[_block];
                        } else {
                            block = _block;
                        }
                        matchedField = block.flattenedFields.find((field)=>field.name === segment);
                        if (matchedField) {
                            break;
                        }
                    }
                }
            } else {
                if (lastIncompletePath?.field && 'flattenedFields' in lastIncompletePath.field) {
                    fieldsToSearch = lastIncompletePath.field.flattenedFields;
                } else {
                    fieldsToSearch = lastIncompletePath.fields;
                }
                _parentIsLocalized = parentIsLocalized || lastIncompletePath.field?.localized;
                matchedField = fieldsToSearch.find((field)=>field.name === segment);
            }
            lastIncompletePath.field = matchedField;
            if (currentPath === 'globalType' && globalSlug) {
                lastIncompletePath.path = currentPath;
                lastIncompletePath.complete = true;
                lastIncompletePath.field = {
                    name: 'globalType',
                    type: 'text'
                };
                return paths;
            }
            if (currentPath === 'relationTo') {
                lastIncompletePath.path = currentPath;
                lastIncompletePath.complete = true;
                lastIncompletePath.field = {
                    name: 'relationTo',
                    type: 'select',
                    options: Object.keys(payload.collections)
                };
                return paths;
            }
            if (!matchedField && currentPath === 'id' && i === pathSegments.length - 1) {
                lastIncompletePath.path = currentPath;
                const idField = {
                    name: 'id',
                    type: payload.db.defaultIDType
                };
                lastIncompletePath.field = idField;
                lastIncompletePath.complete = true;
                return paths;
            }
            if (matchedField) {
                if ('hidden' in matchedField && matchedField.hidden && !overrideAccess) {
                    lastIncompletePath.invalid = true;
                }
                const nextSegment = pathSegments[i + 1];
                const currentFieldIsLocalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldShouldBeLocalized"])({
                    field: matchedField,
                    parentIsLocalized: _parentIsLocalized
                });
                const nextSegmentIsLocale = localizationConfig && localizationConfig.localeCodes.includes(nextSegment) && currentFieldIsLocalized;
                if (nextSegmentIsLocale) {
                    // Skip the next iteration, because it's a locale
                    i += 1;
                    currentPath = `${currentPath}.${nextSegment}`;
                } else if (localizationConfig && currentFieldIsLocalized) {
                    currentPath = `${currentPath}.${locale}`;
                }
                switch(matchedField.type){
                    case 'join':
                    case 'relationship':
                    case 'upload':
                        {
                            // If this is a polymorphic relation,
                            // We only support querying directly (no nested querying)
                            if (matchedField.type !== 'join' && typeof matchedField.relationTo !== 'string') {
                                lastIncompletePath.path = pathSegments.join('.');
                                if (![
                                    matchedField.name,
                                    'relationTo',
                                    'value'
                                ].includes(pathSegments.at(-1))) {
                                    lastIncompletePath.invalid = true;
                                } else {
                                    lastIncompletePath.complete = true;
                                }
                            } else {
                                lastIncompletePath.complete = true;
                                lastIncompletePath.path = currentPath;
                                const nestedPathToQuery = pathSegments.slice(nextSegmentIsLocale ? i + 2 : i + 1).join('.');
                                if (nestedPathToQuery) {
                                    let relatedCollection;
                                    if (matchedField.type === 'join') {
                                        if (Array.isArray(matchedField.collection)) {
                                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]('Not supported');
                                        }
                                        relatedCollection = payload.collections[matchedField.collection].config;
                                    } else {
                                        relatedCollection = payload.collections[matchedField.relationTo].config;
                                    }
                                    const remainingPaths = getLocalizedPaths({
                                        collectionSlug: relatedCollection.slug,
                                        fields: relatedCollection.flattenedFields,
                                        globalSlug,
                                        incomingPath: nestedPathToQuery,
                                        locale,
                                        parentIsLocalized: false,
                                        payload
                                    });
                                    paths = [
                                        ...paths,
                                        ...remainingPaths
                                    ];
                                }
                                return paths;
                            }
                            break;
                        }
                    case 'json':
                    case 'richText':
                        {
                            const upcomingSegments = pathSegments.slice(i + 1).join('.');
                            pathSegments.forEach((path)=>{
                                if (!/^\w+(?:\.\w+)*$/.test(path)) {
                                    lastIncompletePath.invalid = true;
                                }
                            });
                            lastIncompletePath.complete = true;
                            lastIncompletePath.path = upcomingSegments ? `${currentPath}.${upcomingSegments}` : currentPath;
                            return paths;
                        }
                    default:
                        {
                            if (i + 1 === pathSegments.length) {
                                lastIncompletePath.complete = true;
                            }
                            lastIncompletePath.path = currentPath;
                        }
                }
            } else {
                lastIncompletePath.invalid = true;
                lastIncompletePath.path = currentPath;
                return paths;
            }
        }
    }
    return paths;
} //# sourceMappingURL=getLocalizedPaths.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/queryValidation/validateSearchParams.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateSearchParam",
    ()=>validateSearchParam
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getEntityPermissions$2f$getEntityPermissions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/getEntityPermissions/getEntityPermissions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$getLocalizedPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/getLocalizedPaths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/queryValidation/validateQueryPaths.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function validateSearchParam({ collectionConfig, constraint, errors, fields, globalConfig, operator, overrideAccess, parentIsLocalized, path: incomingPath, policies, polymorphicJoin, req, val, versionFields }) {
    // Replace GraphQL nested field double underscore formatting
    let sanitizedPath;
    if (incomingPath === '_id') {
        sanitizedPath = 'id';
    } else {
        sanitizedPath = incomingPath.replace(/__/g, '.');
    }
    let paths = [];
    const { slug } = collectionConfig || globalConfig;
    const blockReferencesPermissions = {};
    if (globalConfig && !policies.globals[slug]) {
        policies.globals[slug] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getEntityPermissions$2f$getEntityPermissions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEntityPermissions"])({
            blockReferencesPermissions,
            entity: globalConfig,
            entityType: 'global',
            fetchData: false,
            operations: [
                'read'
            ],
            req
        });
    }
    if (sanitizedPath !== 'id') {
        paths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$getLocalizedPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLocalizedPaths"])({
            collectionSlug: collectionConfig?.slug,
            fields,
            globalSlug: globalConfig?.slug,
            incomingPath: sanitizedPath,
            locale: req.locale,
            overrideAccess,
            parentIsLocalized,
            payload: req.payload
        });
    }
    const promises = [];
    // Sanitize relation.otherRelation.id to relation.otherRelation
    if (paths.at(-1)?.path === 'id') {
        const previousField = paths.at(-2)?.field;
        if (previousField && (previousField.type === 'relationship' || previousField.type === 'upload') && typeof previousField.relationTo === 'string') {
            paths.pop();
        }
    }
    promises.push(...paths.map(async ({ collectionSlug, field, invalid, path }, i)=>{
        if (invalid) {
            if (!polymorphicJoin) {
                errors.push({
                    path
                });
            }
            return;
        }
        // where: { relatedPosts: { equals: 1}} -> { 'relatedPosts.id': { equals: 1}}
        if (field.type === 'join' && path === incomingPath) {
            constraint[`${path}.id`] = constraint[path];
            delete constraint[path];
        }
        if ('virtual' in field && field.virtual) {
            if (field.virtual === true) {
                errors.push({
                    path
                });
            }
        }
        if (polymorphicJoin && path === 'relationTo') {
            return;
        }
        if (!overrideAccess && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
            if (collectionSlug) {
                if (!policies.collections[collectionSlug]) {
                    policies.collections[collectionSlug] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getEntityPermissions$2f$getEntityPermissions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEntityPermissions"])({
                        blockReferencesPermissions,
                        entity: req.payload.collections[collectionSlug].config,
                        entityType: 'collection',
                        fetchData: false,
                        operations: [
                            'read'
                        ],
                        req: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isolateObjectProperty"])(req, 'transactionID')
                    });
                }
                if ([
                    'hash',
                    'salt'
                ].includes(incomingPath) && collectionConfig.auth && !collectionConfig.auth?.disableLocalStrategy) {
                    errors.push({
                        path: incomingPath
                    });
                }
            }
            let fieldPath = path;
            // remove locale from end of path
            if (path.endsWith(`.${req.locale}`)) {
                fieldPath = path.slice(0, -(req.locale.length + 1));
            }
            // remove ".value" from ends of polymorphic relationship paths
            if ((field.type === 'relationship' || field.type === 'upload') && Array.isArray(field.relationTo)) {
                fieldPath = fieldPath.replace('.value', '');
            }
            const entityType = globalConfig ? 'globals' : 'collections';
            const entitySlug = collectionSlug || globalConfig.slug;
            const segments = fieldPath.split('.');
            let fieldAccess;
            if (versionFields) {
                fieldAccess = policies[entityType][entitySlug].fields;
                if (segments[0] === 'parent' || segments[0] === 'version' || segments[0] === 'snapshot' || segments[0] === 'latest') {
                    segments.shift();
                }
            } else {
                fieldAccess = policies[entityType][entitySlug].fields;
            }
            if (segments.length) {
                segments.forEach((segment)=>{
                    if (fieldAccess[segment]) {
                        if ('fields' in fieldAccess[segment]) {
                            fieldAccess = fieldAccess[segment].fields;
                        } else {
                            fieldAccess = fieldAccess[segment];
                        }
                    }
                });
                if (!fieldAccess?.read?.permission) {
                    errors.push({
                        path: fieldPath
                    });
                }
            }
        }
        if (i > 1) {
            // Remove top collection and reverse array
            // to work backwards from top
            const pathsToQuery = paths.slice(1).reverse();
            pathsToQuery.forEach(({ collectionSlug: pathCollectionSlug, path: subPath }, pathToQueryIndex)=>{
                // On the "deepest" collection,
                // validate query of the relationship
                if (pathToQueryIndex === 0) {
                    promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateQueryPaths"])({
                        collectionConfig: req.payload.collections[pathCollectionSlug].config,
                        errors,
                        globalConfig: undefined,
                        overrideAccess,
                        policies,
                        req,
                        where: {
                            [subPath]: {
                                [operator]: val
                            }
                        }
                    }));
                }
            });
        }
    }));
    await Promise.all(promises);
} //# sourceMappingURL=validateSearchParams.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/queryValidation/validateQueryPaths.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateQueryPaths",
    ()=>validateQueryPaths
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$QueryError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/QueryError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$types$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/types/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateSearchParams$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/queryValidation/validateSearchParams.js [app-rsc] (ecmascript)");
;
;
;
async function validateQueryPaths({ collectionConfig, errors = [], globalConfig, overrideAccess, policies = {
    collections: {},
    globals: {}
}, polymorphicJoin, req, versionFields, where }) {
    const fields = versionFields || (globalConfig || collectionConfig).flattenedFields;
    if (typeof where === 'object') {
        // We need to determine if the whereKey is an AND, OR, or a schema path
        const promises = [];
        for(const path in where){
            const constraint = where[path];
            if ((path === 'and' || path === 'or') && Array.isArray(constraint)) {
                for (const item of constraint){
                    if (collectionConfig) {
                        promises.push(validateQueryPaths({
                            collectionConfig,
                            errors,
                            overrideAccess,
                            policies,
                            polymorphicJoin,
                            req,
                            versionFields,
                            where: item
                        }));
                    } else {
                        promises.push(validateQueryPaths({
                            errors,
                            globalConfig,
                            overrideAccess,
                            policies,
                            polymorphicJoin,
                            req,
                            versionFields,
                            where: item
                        }));
                    }
                }
            } else if (!Array.isArray(constraint)) {
                for(const operator in constraint){
                    const val = constraint[operator];
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$types$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validOperatorSet"].has(operator)) {
                        promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateSearchParams$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateSearchParam"])({
                            collectionConfig,
                            constraint: where,
                            errors,
                            fields,
                            globalConfig,
                            operator,
                            overrideAccess,
                            path,
                            policies,
                            polymorphicJoin,
                            req,
                            val,
                            versionFields
                        }));
                    } else if (typeof val !== 'object' || val === null) {
                        errors.push({
                            path: `${path}.${operator}`
                        });
                    }
                }
            }
        }
        await Promise.all(promises);
        if (errors.length > 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$QueryError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["QueryError"](errors);
        }
    }
} //# sourceMappingURL=validateQueryPaths.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/sanitizeWhereQuery.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Currently used only for virtual fields linked with relationships
 */ __turbopack_context__.s([
    "sanitizeWhereQuery",
    ()=>sanitizeWhereQuery
]);
const sanitizeWhereQuery = ({ fields, payload, where })=>{
    for(const key in where){
        const value = where[key];
        if ([
            'and',
            'or'
        ].includes(key.toLowerCase()) && Array.isArray(value)) {
            for (const where of value){
                sanitizeWhereQuery({
                    fields,
                    payload,
                    where
                });
            }
            continue;
        }
        const paths = key.split('.');
        let pathHasChanged = false;
        let currentFields = fields;
        for(let i = 0; i < paths.length; i++){
            const path = paths[i];
            const field = currentFields.find((each)=>each.name === path);
            if (!field) {
                break;
            }
            if ('virtual' in field && field.virtual && typeof field.virtual === 'string') {
                paths[i] = field.virtual;
                pathHasChanged = true;
            }
            if ('flattenedFields' in field) {
                currentFields = field.flattenedFields;
            }
            if ((field.type === 'relationship' || field.type === 'upload') && typeof field.relationTo === 'string') {
                const relatedCollection = payload.collections[field.relationTo];
                if (relatedCollection) {
                    currentFields = relatedCollection.config.flattenedFields;
                }
            }
        }
        if (pathHasChanged) {
            where[paths.join('.')] = where[key];
            delete where[key];
        }
    }
}; //# sourceMappingURL=sanitizeWhereQuery.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/sanitizeJoinQuery.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sanitizeJoinQuery",
    ()=>sanitizeJoinQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/auth/executeAccess.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$QueryError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/QueryError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/combineQueries.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/queryValidation/validateQueryPaths.js [app-rsc] (ecmascript)");
;
;
;
;
const sanitizeJoinFieldQuery = async ({ collectionSlug, errors, join, joinsQuery, overrideAccess, promises, req })=>{
    const { joinPath } = join;
    // TODO: fix any's in joinsQuery[joinPath]
    if (joinsQuery[joinPath] === false) {
        return;
    }
    const joinCollectionConfig = req.payload.collections[collectionSlug].config;
    const accessResult = !overrideAccess ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["executeAccess"])({
        disableErrors: true,
        req
    }, joinCollectionConfig.access.read) : true;
    if (accessResult === false) {
        ;
        joinsQuery[joinPath] = false;
        return;
    }
    if (!joinsQuery[joinPath]) {
        ;
        joinsQuery[joinPath] = {};
    }
    const joinQuery = joinsQuery[joinPath];
    if (!joinQuery.where) {
        joinQuery.where = {};
    }
    if (join.field.where) {
        joinQuery.where = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["combineQueries"])(joinQuery.where, join.field.where);
    }
    promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateQueryPaths"])({
        collectionConfig: joinCollectionConfig,
        errors,
        overrideAccess,
        polymorphicJoin: Array.isArray(join.field.collection),
        req,
        // incoming where input, but we shouldn't validate generated from the access control.
        where: joinQuery.where
    }));
    if (typeof accessResult === 'object') {
        joinQuery.where = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["combineQueries"])(joinQuery.where, accessResult);
    }
};
const sanitizeJoinQuery = async ({ collectionConfig, joins: joinsQuery, overrideAccess, req })=>{
    if (joinsQuery === false) {
        return false;
    }
    if (!joinsQuery) {
        joinsQuery = {};
    }
    const errors = [];
    const promises = [];
    for(const collectionSlug in collectionConfig.joins){
        for (const join of collectionConfig.joins[collectionSlug]){
            await sanitizeJoinFieldQuery({
                collectionSlug,
                errors,
                join,
                joinsQuery,
                overrideAccess,
                promises,
                req
            });
        }
    }
    for (const join of collectionConfig.polymorphicJoins){
        for (const collectionSlug of join.field.collection){
            await sanitizeJoinFieldQuery({
                collectionSlug,
                errors,
                join,
                joinsQuery,
                overrideAccess,
                promises,
                req
            });
        }
    }
    await Promise.all(promises);
    if (errors.length > 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$QueryError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["QueryError"](errors);
    }
    return joinsQuery;
}; //# sourceMappingURL=sanitizeJoinQuery.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/getPredefinedMigration.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPredefinedMigration",
    ()=>getPredefinedMigration
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dynamicImport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/dynamicImport.js [app-rsc] (ecmascript)");
;
;
;
const getPredefinedMigration = async ({ dirname, file, migrationName: migrationNameArg, payload })=>{
    const importPath = file ?? migrationNameArg;
    // Path 1: @payloadcms/db-* adapters - load directly from predefinedMigrations folder
    // These don't need package.json exports; files are resolved relative to adapter's dirname
    if (importPath?.startsWith('@payloadcms/db-')) {
        const migrationName = importPath.split('/').slice(2).join('/');
        let cleanPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dirname, `./predefinedMigrations/${migrationName}`);
        if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(`${cleanPath}.mjs`)) {
            cleanPath = `${cleanPath}.mjs`;
        } else if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(`${cleanPath}.js`)) {
            cleanPath = `${cleanPath}.js`;
        } else if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(`${cleanPath}.ts`)) {
            // Support .ts in development when running from source
            cleanPath = `${cleanPath}.ts`;
        } else {
            payload.logger.error({
                msg: `Canned migration ${migrationName} not found.`
            });
            process.exit(1);
        }
        cleanPath = cleanPath.replaceAll('\\', '/');
        try {
            const { downSQL, dynamic, imports, upSQL } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dynamicImport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dynamicImport"])(cleanPath);
            return {
                downSQL,
                dynamic,
                imports,
                upSQL
            };
        } catch (err) {
            payload.logger.error({
                err,
                msg: `Error loading predefined migration ${migrationName}`
            });
            process.exit(1);
        }
    } else if (importPath) {
        // Path 2: Any other package or file path - use dynamic import
        // Supports: package.json exports (e.g. @payloadcms/plugin-seo/migration) or absolute file paths
        try {
            const { downSQL, dynamic, imports, upSQL } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dynamicImport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dynamicImport"])(importPath);
            return {
                downSQL,
                dynamic,
                imports,
                upSQL
            };
        } catch (_err) {
            if (importPath?.includes('/')) {
                // We can assume that the intent was to import a file, thus we throw an error.
                throw new Error(`Error importing migration file from ${importPath}`);
            }
            // Silently fail. If the migration cannot be imported, it will be created as a blank migration and the import path will be used as the migration name.
            return {};
        }
    }
    return {};
}; //# sourceMappingURL=getPredefinedMigration.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/writeMigrationIndex.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "writeMigrationIndex",
    ()=>writeMigrationIndex
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$node_modules$2f$get$2d$tsconfig$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/node_modules/get-tsconfig/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
;
// Function to get all migration files (TS or JS) excluding 'index'
const getMigrationFiles = (dir)=>{
    return __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(dir).filter((file)=>(file.endsWith('.ts') || file.endsWith('.js')) && file !== 'index.ts' && file !== 'index.js').sort();
};
// Function to generate the index.ts content
const generateIndexContent = (files)=>{
    const tsconfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$node_modules$2f$get$2d$tsconfig$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTsconfig"])();
    const importExt = tsconfig?.config?.compilerOptions?.moduleResolution === 'NodeNext' ? '.js' : '';
    let imports = '';
    let exportsArray = 'export const migrations = [\n';
    files.forEach((file, index)=>{
        const fileNameWithoutExt = file.replace(/\.[^/.]+$/, '');
        imports += `import * as migration_${fileNameWithoutExt} from './${fileNameWithoutExt}${importExt}';\n`;
        exportsArray += `  {
    up: migration_${fileNameWithoutExt}.up,
    down: migration_${fileNameWithoutExt}.down,
    name: '${fileNameWithoutExt}'${index !== files.length - 1 ? ',' : ''}\n  },\n`;
    });
    exportsArray += '];\n';
    return imports + '\n' + exportsArray;
};
const writeMigrationIndex = (args)=>{
    const migrationFiles = getMigrationFiles(args.migrationsDir);
    const indexContent = generateIndexContent(migrationFiles);
    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(args.migrationsDir, 'index.ts'), indexContent);
}; //# sourceMappingURL=writeMigrationIndex.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/readMigrationFiles.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readMigrationFiles",
    ()=>readMigrationFiles
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dynamicImport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/dynamicImport.js [app-rsc] (ecmascript)");
;
;
;
const readMigrationFiles = async ({ payload })=>{
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(payload.db.migrationDir)) {
        payload.logger.error({
            msg: `No migration directory found at ${payload.db.migrationDir}`
        });
        return [];
    }
    payload.logger.info({
        msg: `Reading migration files from ${payload.db.migrationDir}`
    });
    const files = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(payload.db.migrationDir).sort().filter((f)=>{
        return (f.endsWith('.ts') || f.endsWith('.js')) && f !== 'index.js' && f !== 'index.ts';
    }).map((file)=>{
        return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(payload.db.migrationDir, file);
    });
    return Promise.all(files.map(async (filePath)=>{
        const migrationModule = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dynamicImport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dynamicImport"])(filePath);
        const migration = 'default' in migrationModule ? migrationModule.default : migrationModule;
        const result = {
            name: __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].basename(filePath).split('.')[0],
            down: migration.down,
            up: migration.up
        };
        return result;
    }));
}; //# sourceMappingURL=readMigrationFiles.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/getMigrations.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Gets all existing migrations from the database, excluding the dev migration
 */ __turbopack_context__.s([
    "getMigrations",
    ()=>getMigrations
]);
async function getMigrations({ payload }) {
    const migrationQuery = await payload.find({
        collection: 'payload-migrations',
        limit: 0,
        sort: [
            '-batch',
            '-name'
        ],
        where: {
            batch: {
                not_equals: -1
            }
        }
    });
    const existingMigrations = migrationQuery.docs;
    // Get the highest batch number from existing migrations
    const latestBatch = Number(existingMigrations?.[0]?.batch) || 0;
    return {
        existingMigrations,
        latestBatch
    };
} //# sourceMappingURL=getMigrations.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/defaultUpdateJobs.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultUpdateJobs",
    ()=>defaultUpdateJobs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$collection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/queues/config/collection.js [app-rsc] (ecmascript)");
;
const defaultUpdateJobs = async function updateMany({ id, data, limit, req, returning, where }) {
    const updatedJobs = [];
    const jobsToUpdate = (id ? [
        await this.findOne({
            collection: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$collection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jobsCollectionSlug"],
            req,
            where: {
                id: {
                    equals: id
                }
            }
        })
    ] : (await this.find({
        collection: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$collection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jobsCollectionSlug"],
        limit,
        pagination: false,
        req,
        where
    })).docs).filter(Boolean);
    if (!jobsToUpdate) {
        return null;
    }
    for (const job of jobsToUpdate){
        const updateData = {
            ...job,
            ...data
        };
        const updatedJob = await this.updateOne({
            id: job.id,
            collection: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$collection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jobsCollectionSlug"],
            data: updateData,
            req,
            returning
        });
        updatedJobs.push(updatedJob);
    }
    return updatedJobs;
}; //# sourceMappingURL=defaultUpdateJobs.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/migrationTemplate.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "migrationTemplate",
    ()=>migrationTemplate
]);
const migrationTemplate = `
import {
  MigrateUpArgs,
  MigrateDownArgs,
} from "@payloadcms/db-mongodb";

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  // Migration code
};

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  // Migration code
};
`; //# sourceMappingURL=migrationTemplate.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/createMigration.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMigration",
    ()=>createMigration
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$writeMigrationIndex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/writeMigrationIndex.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$migrationTemplate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/migrationTemplate.js [app-rsc] (ecmascript)");
;
;
;
const createMigration = function createMigration({ migrationName, payload }) {
    const dir = payload.db.migrationDir;
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(dir)) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].mkdirSync(dir);
    }
    const [yyymmdd, hhmmss] = new Date().toISOString().split('T');
    const formattedDate = yyymmdd.replace(/\D/g, '');
    const formattedTime = hhmmss.split('.')[0].replace(/\D/g, '');
    const timestamp = `${formattedDate}_${formattedTime}`;
    const formattedName = migrationName.replace(/\W/g, '_');
    const fileName = `${timestamp}_${formattedName}.ts`;
    const filePath = `${dir}/${fileName}`;
    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(filePath, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$migrationTemplate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["migrationTemplate"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$writeMigrationIndex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["writeMigrationIndex"])({
        migrationsDir: payload.db.migrationDir
    });
    payload.logger.info({
        msg: `Migration created at ${filePath}`
    });
}; //# sourceMappingURL=createMigration.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/migrate.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "migrate",
    ()=>migrate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/commitTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/createLocalReq.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/initTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/killTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$getMigrations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/getMigrations.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/readMigrationFiles.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
const migrate = async function migrate(args) {
    const { payload } = this;
    const migrationFiles = args?.migrations || await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readMigrationFiles"])({
        payload
    });
    const { existingMigrations, latestBatch } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$getMigrations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMigrations"])({
        payload
    });
    const newBatch = latestBatch + 1;
    // Execute 'up' function for each migration sequentially
    for (const migration of migrationFiles){
        const existingMigration = existingMigrations.find((existing)=>existing.name === migration.name);
        // Run migration if not found in database
        if (existingMigration) {
            continue;
        }
        const start = Date.now();
        const req = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLocalReq"])({}, payload);
        payload.logger.info({
            msg: `Migrating: ${migration.name}`
        });
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initTransaction"])(req);
            const session = payload.db.sessions?.[await req.transactionID];
            await migration.up({
                payload,
                req,
                session
            });
            payload.logger.info({
                msg: `Migrated:  ${migration.name} (${Date.now() - start}ms)`
            });
            await payload.create({
                collection: 'payload-migrations',
                data: {
                    name: migration.name,
                    batch: newBatch
                },
                req
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["commitTransaction"])(req);
        } catch (err) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["killTransaction"])(req);
            payload.logger.error({
                err,
                msg: `Error running migration ${migration.name}`
            });
            throw err;
        }
    }
}; //# sourceMappingURL=migrate.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/migrateDown.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "migrateDown",
    ()=>migrateDown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/commitTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/createLocalReq.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/initTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/killTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$getMigrations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/getMigrations.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/readMigrationFiles.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function migrateDown() {
    const { payload } = this;
    const migrationFiles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readMigrationFiles"])({
        payload
    });
    const { existingMigrations, latestBatch } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$getMigrations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMigrations"])({
        payload
    });
    if (!existingMigrations?.length) {
        payload.logger.info({
            msg: 'No migrations to rollback.'
        });
        return;
    }
    payload.logger.info({
        msg: `Rolling back batch ${latestBatch} consisting of ${existingMigrations.length} migration(s).`
    });
    const latestBatchMigrations = existingMigrations.filter(({ batch })=>batch === latestBatch);
    for (const migration of latestBatchMigrations){
        const migrationFile = migrationFiles.find((m)=>m.name === migration.name);
        if (!migrationFile) {
            throw new Error(`Migration ${migration.name} not found locally.`);
        }
        const start = Date.now();
        const req = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLocalReq"])({}, payload);
        try {
            payload.logger.info({
                msg: `Migrating down: ${migrationFile.name}`
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initTransaction"])(req);
            const session = payload.db.sessions?.[await req.transactionID];
            await migrationFile.down({
                payload,
                req,
                session
            });
            payload.logger.info({
                msg: `Migrated down:  ${migrationFile.name} (${Date.now() - start}ms)`
            });
            // Waiting for implementation here
            await payload.delete({
                id: migration.id,
                collection: 'payload-migrations',
                req
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["commitTransaction"])(req);
        } catch (err) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["killTransaction"])(req);
            payload.logger.error({
                err,
                msg: `Error running migration ${migrationFile.name}`
            });
            process.exit(1);
        }
    }
} //# sourceMappingURL=migrateDown.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/migrateRefresh.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "migrateRefresh",
    ()=>migrateRefresh
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/commitTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/createLocalReq.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/initTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/killTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$getMigrations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/getMigrations.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/readMigrationFiles.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function migrateRefresh() {
    const { payload } = this;
    const migrationFiles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readMigrationFiles"])({
        payload
    });
    const { existingMigrations } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$getMigrations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMigrations"])({
        payload
    });
    const req = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLocalReq"])({}, payload);
    if (existingMigrations?.length) {
        payload.logger.info({
            msg: `Rolling back all ${existingMigrations.length} migration(s).`
        });
        // Reverse order of migrations to rollback
        existingMigrations.reverse();
        for (const migration of existingMigrations){
            try {
                const migrationFile = migrationFiles.find((m)=>m.name === migration.name);
                if (!migrationFile) {
                    throw new Error(`Migration ${migration.name} not found locally.`);
                }
                payload.logger.info({
                    msg: `Migrating down: ${migration.name}`
                });
                const start = Date.now();
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initTransaction"])(req);
                const session = payload.db.sessions?.[await req.transactionID];
                await migrationFile.down({
                    payload,
                    req,
                    session
                });
                payload.logger.info({
                    msg: `Migrated down:  ${migration.name} (${Date.now() - start}ms)`
                });
                await payload.delete({
                    collection: 'payload-migrations',
                    req,
                    where: {
                        name: {
                            equals: migration.name
                        }
                    }
                });
            } catch (err) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["killTransaction"])(req);
                let msg = `Error running migration ${migration.name}. Rolling back.`;
                if (err instanceof Error) {
                    msg += ` ${err.message}`;
                }
                payload.logger.error({
                    err,
                    msg
                });
                process.exit(1);
            }
        }
    } else {
        payload.logger.info({
            msg: 'No migrations to rollback.'
        });
    }
    // Run all migrate up
    for (const migration of migrationFiles){
        payload.logger.info({
            msg: `Migrating: ${migration.name}`
        });
        try {
            const start = Date.now();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initTransaction"])(req);
            await migration.up({
                payload,
                req
            });
            await payload.create({
                collection: 'payload-migrations',
                data: {
                    name: migration.name,
                    executed: true
                },
                req
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["commitTransaction"])(req);
            payload.logger.info({
                msg: `Migrated:  ${migration.name} (${Date.now() - start}ms)`
            });
        } catch (err) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["killTransaction"])(req);
            let msg = `Error running migration ${migration.name}. Rolling back.`;
            if (err instanceof Error) {
                msg += ` ${err.message}`;
            }
            payload.logger.error({
                err,
                msg
            });
            process.exit(1);
        }
    }
} //# sourceMappingURL=migrateRefresh.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/migrateReset.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "migrateReset",
    ()=>migrateReset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/commitTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/createLocalReq.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/initTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/killTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$getMigrations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/getMigrations.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/readMigrationFiles.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function migrateReset() {
    const { payload } = this;
    const migrationFiles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readMigrationFiles"])({
        payload
    });
    const { existingMigrations } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$getMigrations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMigrations"])({
        payload
    });
    if (!existingMigrations?.length) {
        payload.logger.info({
            msg: 'No migrations to reset.'
        });
        return;
    }
    const req = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLocalReq"])({}, payload);
    migrationFiles.reverse();
    // Rollback all migrations in order
    for (const migration of migrationFiles){
        // Create or update migration in database
        const existingMigration = existingMigrations.find((existing)=>existing.name === migration.name);
        if (existingMigration) {
            payload.logger.info({
                msg: `Migrating down: ${migration.name}`
            });
            try {
                const start = Date.now();
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initTransaction"])(req);
                const session = payload.db.sessions?.[await req.transactionID];
                await migration.down({
                    payload,
                    req,
                    session
                });
                await payload.delete({
                    collection: 'payload-migrations',
                    req,
                    where: {
                        id: {
                            equals: existingMigration.id
                        }
                    }
                });
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["commitTransaction"])(req);
                payload.logger.info({
                    msg: `Migrated down:  ${migration.name} (${Date.now() - start}ms)`
                });
            } catch (err) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["killTransaction"])(req);
                payload.logger.error({
                    err,
                    msg: `Error running migration ${migration.name}`
                });
                throw err;
            }
        }
    }
    // Delete dev migration
    try {
        await payload.delete({
            collection: 'payload-migrations',
            where: {
                batch: {
                    equals: -1
                }
            }
        });
    } catch (err) {
        payload.logger.error({
            err,
            msg: 'Error deleting dev migration'
        });
    }
} //# sourceMappingURL=migrateReset.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/migrateStatus.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "migrateStatus",
    ()=>migrateStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$console$2d$table$2d$printer$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/console-table-printer/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$getMigrations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/getMigrations.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/readMigrationFiles.js [app-rsc] (ecmascript)");
;
;
;
async function migrateStatus() {
    const { payload } = this;
    const migrationFiles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readMigrationFiles"])({
        payload
    });
    payload.logger.debug({
        msg: `Found ${migrationFiles.length} migration files.`
    });
    const { existingMigrations } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$getMigrations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMigrations"])({
        payload
    });
    if (!migrationFiles.length) {
        payload.logger.info({
            msg: 'No migrations found.'
        });
        return;
    }
    // Compare migration files to existing migrations
    const statuses = migrationFiles.map((migration)=>{
        const existingMigration = existingMigrations.find((m)=>m.name === migration.name);
        return {
            Name: migration.name,
            Batch: existingMigration?.batch,
            Ran: existingMigration ? 'Yes' : 'No'
        };
    });
    const p = new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$console$2d$table$2d$printer$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Table"]();
    statuses.forEach((s)=>{
        p.addRow(s, {
            color: s.Ran === 'Yes' ? 'green' : 'red'
        });
    });
    p.printTable();
} //# sourceMappingURL=migrateStatus.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/createDatabaseAdapter.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDatabaseAdapter",
    ()=>createDatabaseAdapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$defaultUpdateJobs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/defaultUpdateJobs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$createMigration$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/createMigration.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$migrate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/migrate.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$migrateDown$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/migrateDown.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$migrateRefresh$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/migrateRefresh.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$migrateReset$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/migrateReset.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$migrateStatus$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/migrateStatus.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const beginTransaction = ()=>Promise.resolve(null);
// @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
const rollbackTransaction = ()=>Promise.resolve(null);
// @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
const commitTransaction = ()=>Promise.resolve(null);
function createDatabaseAdapter(args) {
    return {
        // Default 'null' transaction functions
        // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
        beginTransaction,
        // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
        commitTransaction,
        createMigration: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$createMigration$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createMigration"],
        migrate: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$migrate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["migrate"],
        migrateDown: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$migrateDown$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["migrateDown"],
        migrateFresh: ()=>Promise.resolve(null),
        migrateRefresh: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$migrateRefresh$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["migrateRefresh"],
        migrateReset: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$migrateReset$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["migrateReset"],
        migrateStatus: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$migrateStatus$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["migrateStatus"],
        // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
        rollbackTransaction,
        updateJobs: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$defaultUpdateJobs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultUpdateJobs"],
        ...args,
        // Ensure migrationDir is set
        migrationDir: args.migrationDir || 'migrations',
        // Set default for bulkOperationsSingleTransaction if not provided
        bulkOperationsSingleTransaction: args.bulkOperationsSingleTransaction ?? false
    };
} //# sourceMappingURL=createDatabaseAdapter.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/defaultBeginTransaction.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Default implementation of `beginTransaction` that returns a resolved promise of null
 */ __turbopack_context__.s([
    "defaultBeginTransaction",
    ()=>defaultBeginTransaction
]);
function defaultBeginTransaction() {
    const promiseSingleton = Promise.resolve(null);
    return ()=>promiseSingleton;
} //# sourceMappingURL=defaultBeginTransaction.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/findMigrationDir.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findMigrationDir",
    ()=>findMigrationDir
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const findMigrationDir = (migrationDir)=>{
    const cwd = process.cwd();
    const srcMigrationsDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(cwd, 'src/migrations');
    const distMigrationsDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(cwd, 'dist/migrations');
    const relativeMigrations = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(cwd, 'migrations');
    // Use arg if provided
    if (migrationDir) {
        return migrationDir;
    }
    // Check other common locations
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(srcMigrationsDir)) {
        return srcMigrationsDir;
    }
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(distMigrationsDir)) {
        return distMigrationsDir;
    }
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(relativeMigrations)) {
        return relativeMigrations;
    }
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(cwd, 'src'))) {
        return srcMigrationsDir;
    }
    return relativeMigrations;
}; //# sourceMappingURL=findMigrationDir.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/migrationsCollection.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "migrationsCollection",
    ()=>migrationsCollection
]);
const migrationsCollection = {
    slug: 'payload-migrations',
    admin: {
        hidden: true
    },
    endpoints: false,
    fields: [
        {
            name: 'name',
            type: 'text'
        },
        {
            name: 'batch',
            type: 'number'
        }
    ],
    graphQL: false,
    lockDocuments: false
}; //# sourceMappingURL=migrationsCollection.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/types/constants.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validOperatorSet",
    ()=>validOperatorSet,
    "validOperators",
    ()=>validOperators
]);
const validOperators = [
    'equals',
    'contains',
    'not_equals',
    'in',
    'all',
    'not_in',
    'exists',
    'greater_than',
    'greater_than_equal',
    'less_than',
    'less_than_equal',
    'like',
    'not_like',
    'within',
    'intersects',
    'near'
];
const validOperatorSet = new Set(validOperators); //# sourceMappingURL=constants.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/types/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "docHasTimestamps",
    ()=>docHasTimestamps
]);
function docHasTimestamps(doc) {
    return doc?.createdAt && doc?.updatedAt;
} //# sourceMappingURL=index.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/defaults.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "versionDefaults",
    ()=>versionDefaults
]);
const versionDefaults = {
    autosaveInterval: 2000
}; //# sourceMappingURL=defaults.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/drafts/appendVersionToQueryKey.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appendVersionToQueryKey",
    ()=>appendVersionToQueryKey
]);
const appendVersionToQueryKey = (query = {})=>{
    return Object.entries(query).reduce((res, [key, val])=>{
        if ([
            'AND',
            'and',
            'OR',
            'or'
        ].includes(key) && Array.isArray(val)) {
            return {
                ...res,
                [key.toLowerCase()]: val.map((subQuery)=>appendVersionToQueryKey(subQuery))
            };
        }
        if (key !== 'id') {
            return {
                ...res,
                [`version.${key}`]: val
            };
        }
        return {
            ...res,
            parent: val
        };
    }, {});
}; //# sourceMappingURL=appendVersionToQueryKey.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/getLatestCollectionVersion.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLatestCollectionVersion",
    ()=>getLatestCollectionVersion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/combineQueries.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/getVersionsConfig.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$appendVersionToQueryKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/drafts/appendVersionToQueryKey.js [app-rsc] (ecmascript)");
;
;
;
const getLatestCollectionVersion = async ({ id, config, payload, published, query, req })=>{
    let latestVersion;
    const whereQuery = published ? {
        and: [
            {
                parent: {
                    equals: id
                }
            },
            {
                'version._status': {
                    equals: 'published'
                }
            }
        ]
    } : {
        and: [
            {
                parent: {
                    equals: id
                }
            },
            {
                latest: {
                    equals: true
                }
            }
        ]
    };
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasDraftsEnabled"])(config)) {
        const { docs } = await payload.db.findVersions({
            collection: config.slug,
            limit: 1,
            locale: req?.locale || query.locale,
            pagination: false,
            req,
            sort: '-updatedAt',
            where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["combineQueries"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$appendVersionToQueryKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["appendVersionToQueryKey"])(query.where), whereQuery)
        });
        latestVersion = docs[0];
    }
    if (!latestVersion) {
        if (!published) {
            const doc = await payload.db.findOne({
                ...query,
                req
            });
            return doc ?? undefined;
        }
        return undefined;
    }
    latestVersion.version.id = id;
    return latestVersion.version;
}; //# sourceMappingURL=getLatestCollectionVersion.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/drafts/getQueryDraftsSelect.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getQueryDraftsSelect",
    ()=>getQueryDraftsSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getSelectMode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/getSelectMode.js [app-rsc] (ecmascript)");
;
const getQueryDraftsSelect = ({ select })=>{
    if (!select) {
        return;
    }
    const mode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getSelectMode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSelectMode"])(select);
    if (mode === 'include') {
        return {
            parent: true,
            version: select
        };
    }
    return {
        version: select
    };
}; //# sourceMappingURL=getQueryDraftsSelect.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/enforceMaxVersions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "enforceMaxVersions",
    ()=>enforceMaxVersions
]);
const enforceMaxVersions = async ({ id, collection, global: globalConfig, max, payload, req })=>{
    const entityType = collection ? 'collection' : 'global';
    const slug = collection ? collection.slug : globalConfig?.slug;
    try {
        const where = {};
        let oldestAllowedDoc;
        if (collection) {
            where.parent = {
                equals: id
            };
            const query = await payload.db.findVersions({
                collection: collection.slug,
                limit: 1,
                page: max + 1,
                pagination: false,
                req,
                sort: '-updatedAt',
                where
            });
            [oldestAllowedDoc] = query.docs;
        } else if (globalConfig) {
            const query = await payload.db.findGlobalVersions({
                global: globalConfig.slug,
                limit: 1,
                page: max + 1,
                pagination: false,
                req,
                sort: '-updatedAt',
                where
            });
            [oldestAllowedDoc] = query.docs;
        }
        if (oldestAllowedDoc?.updatedAt) {
            const deleteQuery = {
                updatedAt: {
                    less_than_equal: oldestAllowedDoc.updatedAt
                }
            };
            if (collection) {
                deleteQuery.parent = {
                    equals: id
                };
            }
            const deleteVersionsArgs = {
                req,
                where: deleteQuery
            };
            if (globalConfig) {
                deleteVersionsArgs.globalSlug = slug;
            } else {
                deleteVersionsArgs.collection = slug;
            }
            await payload.db.deleteVersions(deleteVersionsArgs);
        }
    } catch (err) {
        payload.logger.error(err);
        payload.logger.error(`There was an error cleaning up old versions for the ${entityType} ${slug}`);
    }
}; //# sourceMappingURL=enforceMaxVersions.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/saveSnapshot.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "saveSnapshot",
    ()=>saveSnapshot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/deepCopyObject.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSelect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/drafts/getQueryDraftsSelect.js [app-rsc] (ecmascript)");
;
;
const saveSnapshot = async ({ id, autosave, collection, data, global, payload, publishSpecificLocale, req, select })=>{
    const docData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(data || {});
    if (docData._id) {
        delete docData._id;
    }
    const snapshotDate = new Date().toISOString();
    const sharedCreateVersionArgs = {
        autosave: Boolean(autosave),
        createdAt: snapshotDate,
        publishedLocale: publishSpecificLocale || undefined,
        req,
        returning: false,
        select: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSelect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getQueryDraftsSelect"])({
            select
        }),
        updatedAt: snapshotDate,
        versionData: docData
    };
    if (collection && id) {
        return payload.db.createVersion({
            ...sharedCreateVersionArgs,
            collectionSlug: collection.slug,
            parent: id,
            snapshot: true
        });
    }
    if (global) {
        return payload.db.createGlobalVersion({
            ...sharedCreateVersionArgs,
            globalSlug: global.slug,
            snapshot: true
        });
    }
}; //# sourceMappingURL=saveSnapshot.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/saveVersion.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "saveVersion",
    ()=>saveVersion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/deepCopyObject.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/getVersionsConfig.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeInternalFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/sanitizeInternalFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSelect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/drafts/getQueryDraftsSelect.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$enforceMaxVersions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/enforceMaxVersions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$saveSnapshot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/saveSnapshot.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function saveVersion({ id, autosave, collection, docWithLocales, draft, global, operation, payload, publishSpecificLocale, req, returning, select, snapshot }) {
    let result;
    let createNewVersion = true;
    const now = new Date().toISOString();
    const versionData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(docWithLocales);
    if ((collection?.timestamps || global) && draft) {
        versionData.updatedAt = now;
    }
    if (versionData._id) {
        delete versionData._id;
    }
    try {
        if (autosave) {
            let docs;
            const findVersionArgs = {
                limit: 1,
                pagination: false,
                req,
                sort: '-updatedAt'
            };
            if (collection) {
                ;
                ({ docs } = await payload.db.findVersions({
                    ...findVersionArgs,
                    collection: collection.slug,
                    limit: 1,
                    pagination: false,
                    req,
                    where: {
                        parent: {
                            equals: id
                        }
                    }
                }));
            } else {
                ;
                ({ docs } = await payload.db.findGlobalVersions({
                    ...findVersionArgs,
                    global: global.slug,
                    limit: 1,
                    pagination: false,
                    req
                }));
            }
            const [latestVersion] = docs;
            // overwrite the latest version if it's set to autosave
            if (latestVersion && 'autosave' in latestVersion && latestVersion.autosave === true) {
                createNewVersion = false;
                const updateVersionArgs = {
                    id: latestVersion.id,
                    req,
                    versionData: {
                        createdAt: new Date(latestVersion.createdAt).toISOString(),
                        latest: true,
                        parent: id,
                        updatedAt: now,
                        version: {
                            ...versionData
                        }
                    }
                };
                if (collection) {
                    result = await payload.db.updateVersion({
                        ...updateVersionArgs,
                        collection: collection.slug,
                        req
                    });
                } else {
                    result = await payload.db.updateGlobalVersion({
                        ...updateVersionArgs,
                        global: global.slug,
                        req
                    });
                }
            }
        }
        if (createNewVersion) {
            const createVersionArgs = {
                autosave: Boolean(autosave),
                collectionSlug: undefined,
                createdAt: operation === 'restoreVersion' ? versionData.createdAt : now,
                globalSlug: undefined,
                parent: collection ? id : undefined,
                publishedLocale: publishSpecificLocale || undefined,
                req,
                returning,
                select: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSelect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getQueryDraftsSelect"])({
                    select
                }),
                updatedAt: now,
                versionData
            };
            if (collection) {
                createVersionArgs.collectionSlug = collection.slug;
                result = await payload.db.createVersion(createVersionArgs);
            }
            if (global) {
                createVersionArgs.globalSlug = global.slug;
                result = await payload.db.createGlobalVersion(createVersionArgs);
            }
            if (snapshot) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$saveSnapshot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveSnapshot"])({
                    id,
                    autosave,
                    collection,
                    data: snapshot,
                    global,
                    payload,
                    publishSpecificLocale,
                    req,
                    select
                });
            }
        }
    } catch (err) {
        let errorMessage;
        if (collection) {
            errorMessage = `There was an error while saving a version for the ${typeof collection.labels.singular === 'string' ? collection.labels.singular : collection.slug} with ID ${id}.`;
        }
        if (global) {
            errorMessage = `There was an error while saving a version for the global ${typeof global.label === 'string' ? global.label : global.slug}.`;
        }
        payload.logger.error({
            err,
            msg: errorMessage
        });
        return undefined;
    }
    const max = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getVersionsMax"])(collection || global);
    if (createNewVersion && max > 0) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$enforceMaxVersions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["enforceMaxVersions"])({
            id,
            collection,
            global,
            max,
            payload,
            req
        });
    }
    if (returning === false) {
        return null;
    }
    let createdVersion = result.version;
    createdVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeInternalFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeInternalFields"])(createdVersion);
    createdVersion.id = result.parent;
    return createdVersion;
} //# sourceMappingURL=saveVersion.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/deleteCollectionVersions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteCollectionVersions",
    ()=>deleteCollectionVersions
]);
const deleteCollectionVersions = async ({ id, slug, payload, req })=>{
    try {
        await payload.db.deleteVersions({
            collection: slug,
            req,
            where: {
                parent: {
                    equals: id
                }
            }
        });
    } catch (err) {
        payload.logger.error({
            err,
            msg: `There was an error removing versions for the deleted ${slug} document with ID ${id}.`
        });
    }
}; //# sourceMappingURL=deleteCollectionVersions.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/deleteScheduledPublishJobs.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteScheduledPublishJobs",
    ()=>deleteScheduledPublishJobs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$collection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/queues/config/collection.js [app-rsc] (ecmascript)");
;
const deleteScheduledPublishJobs = async ({ id, slug, payload, req })=>{
    try {
        await payload.db.deleteMany({
            collection: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$collection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jobsCollectionSlug"],
            req,
            where: {
                and: [
                    // only want to delete jobs have not run yet
                    {
                        completedAt: {
                            exists: false
                        }
                    },
                    {
                        processing: {
                            equals: false
                        }
                    },
                    {
                        'input.doc.value': {
                            equals: id
                        }
                    },
                    {
                        'input.doc.relationTo': {
                            equals: slug
                        }
                    },
                    // data.type narrows scheduled publish jobs in case of another job having input.doc.value
                    {
                        taskSlug: {
                            equals: 'schedulePublish'
                        }
                    }
                ]
            }
        });
    } catch (err) {
        payload.logger.error({
            err,
            msg: `There was an error deleting scheduled publish jobs from the queue for ${slug} document with ID ${id}.`
        });
    }
}; //# sourceMappingURL=deleteScheduledPublishJobs.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/baseFields.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// @ts-strict-ignore
__turbopack_context__.s([
    "baseVersionFields",
    ()=>baseVersionFields,
    "statuses",
    ()=>statuses,
    "versionSnapshotField",
    ()=>versionSnapshotField
]);
const statuses = [
    {
        label: ({ t })=>t('version:draft'),
        value: 'draft'
    },
    {
        label: ({ t })=>t('version:published'),
        value: 'published'
    }
];
const baseVersionFields = ({ localized })=>[
        {
            name: '_status',
            type: 'select',
            admin: {
                components: {
                    Field: false
                },
                disableBulkEdit: true
            },
            defaultValue: 'draft',
            index: true,
            label: ({ t })=>t('version:status'),
            localized: Boolean(localized),
            options: statuses
        }
    ];
const versionSnapshotField = {
    name: 'snapshot',
    type: 'checkbox',
    admin: {
        disableBulkEdit: true,
        disabled: true
    },
    index: true
}; //# sourceMappingURL=baseFields.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/buildCollectionFields.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildVersionCollectionFields",
    ()=>buildVersionCollectionFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/getVersionsConfig.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$baseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/baseFields.js [app-rsc] (ecmascript)");
;
;
const buildVersionCollectionFields = (config, collection, flatten)=>{
    const fields = [
        {
            name: 'parent',
            type: 'relationship',
            index: true,
            relationTo: collection.slug
        },
        {
            name: 'version',
            type: 'group',
            fields: collection.fields.filter((field)=>!('name' in field) || field.name !== 'id'),
            ...flatten && {
                flattenedFields: collection.flattenedFields.filter((each)=>each.name !== 'id')
            }
        },
        {
            name: 'createdAt',
            type: 'date',
            admin: {
                disabled: true
            },
            index: true
        },
        {
            name: 'updatedAt',
            type: 'date',
            admin: {
                disabled: true
            },
            index: true
        }
    ];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasDraftsEnabled"])(collection)) {
        if (config.localization) {
            fields.push(__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$baseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["versionSnapshotField"]);
            fields.push({
                name: 'publishedLocale',
                type: 'select',
                admin: {
                    disableBulkEdit: true,
                    disabled: true
                },
                index: true,
                options: config.localization.locales.map((locale)=>{
                    if (typeof locale === 'string') {
                        return locale;
                    }
                    return locale.code;
                })
            });
        }
        fields.push({
            name: 'latest',
            type: 'checkbox',
            admin: {
                disabled: true
            },
            index: true
        });
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasAutosaveEnabled"])(collection)) {
            fields.push({
                name: 'autosave',
                type: 'checkbox',
                index: true
            });
        }
    }
    return fields;
}; //# sourceMappingURL=buildCollectionFields.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/drafts/getQueryDraftsSort.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Takes the incoming sort argument and prefixes it with `versions.` and preserves any `-` prefixes for descending order
 * @param sort
 */ __turbopack_context__.s([
    "getQueryDraftsSort",
    ()=>getQueryDraftsSort
]);
const getQueryDraftsSort = ({ collectionConfig, sort })=>{
    if (!sort) {
        if (collectionConfig.defaultSort) {
            sort = collectionConfig.defaultSort;
        } else {
            sort = '-createdAt';
        }
    }
    if (typeof sort === 'string') {
        sort = [
            sort
        ];
    }
    return sort.map((field)=>{
        let orderBy;
        let direction = '';
        if (field[0] === '-') {
            orderBy = field.substring(1);
            direction = '-';
        } else {
            orderBy = field;
        }
        if (orderBy === 'id') {
            return `${direction}parent`;
        }
        return `${direction}version.${orderBy}`;
    });
}; //# sourceMappingURL=getQueryDraftsSort.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/drafts/replaceWithDraftIfAvailable.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "replaceWithDraftIfAvailable",
    ()=>replaceWithDraftIfAvailable
]);
// @ts-strict-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/auth/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/combineQueries.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$types$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/types/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/getVersionsConfig.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeInternalFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/sanitizeInternalFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$appendVersionToQueryKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/drafts/appendVersionToQueryKey.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSelect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/drafts/getQueryDraftsSelect.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const replaceWithDraftIfAvailable = async ({ accessResult, doc, entity, entityType, req, select })=>{
    const { locale, payload } = req;
    let queryToBuild = {
        and: [
            {
                'version._status': {
                    equals: 'draft'
                }
            }
        ]
    };
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasLocalizeStatusEnabled"])(entity)) {
        if (locale === 'all') {
            queryToBuild = {
                and: [
                    {
                        or: (payload.config.localization && payload.config.localization.localeCodes || []).map((localeCode)=>({
                                [`version._status.${localeCode}`]: {
                                    equals: 'draft'
                                }
                            }))
                    }
                ]
            };
        } else if (locale) {
            queryToBuild = {
                and: [
                    {
                        [`version._status.${locale}`]: {
                            equals: 'draft'
                        }
                    }
                ]
            };
        }
    }
    if (entityType === 'collection') {
        queryToBuild.and.push({
            parent: {
                equals: doc.id
            }
        });
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$types$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["docHasTimestamps"])(doc)) {
        queryToBuild.and.push({
            or: [
                {
                    updatedAt: {
                        greater_than: doc.updatedAt
                    }
                },
                {
                    latest: {
                        equals: true
                    }
                }
            ]
        });
    }
    let versionAccessResult;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasWhereAccessResult"])(accessResult)) {
        versionAccessResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$appendVersionToQueryKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["appendVersionToQueryKey"])(accessResult);
    }
    const findVersionsArgs = {
        collection: entity.slug,
        global: entity.slug,
        limit: 1,
        locale: locale,
        pagination: false,
        req,
        select: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSelect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getQueryDraftsSelect"])({
            select
        }),
        sort: '-updatedAt',
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["combineQueries"])(queryToBuild, versionAccessResult)
    };
    let versionDocs;
    if (entityType === 'global') {
        versionDocs = (await req.payload.db.findGlobalVersions(findVersionsArgs)).docs;
    } else {
        versionDocs = (await req.payload.db.findVersions(findVersionsArgs)).docs;
    }
    let draft = versionDocs[0];
    if (!draft) {
        return doc;
    }
    draft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeInternalFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeInternalFields"])(draft);
    // Patch globalType onto version doc
    if (entityType === 'global' && 'globalType' in doc) {
        // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
        draft.version.globalType = doc.globalType;
    }
    // handle when .version wasn't selected due to projection
    if (!draft.version) {
        draft.version = {};
    }
    // Disregard all other draft content at this point,
    // Only interested in the version itself.
    // Operations will handle firing hooks, etc.
    draft.version.id = doc.id;
    return draft.version;
}; //# sourceMappingURL=replaceWithDraftIfAvailable.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/buildGlobalFields.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildVersionGlobalFields",
    ()=>buildVersionGlobalFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/getVersionsConfig.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$baseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/baseFields.js [app-rsc] (ecmascript)");
;
;
const buildVersionGlobalFields = (config, global, flatten)=>{
    const fields = [
        {
            name: 'version',
            type: 'group',
            fields: global.fields,
            ...flatten && {
                flattenedFields: global.flattenedFields
            }
        },
        {
            name: 'createdAt',
            type: 'date',
            admin: {
                disabled: true
            },
            index: true
        },
        {
            name: 'updatedAt',
            type: 'date',
            admin: {
                disabled: true
            },
            index: true
        }
    ];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasDraftsEnabled"])(global)) {
        if (config.localization) {
            fields.push(__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$baseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["versionSnapshotField"]);
            fields.push({
                name: 'publishedLocale',
                type: 'select',
                admin: {
                    disableBulkEdit: true,
                    disabled: true
                },
                index: true,
                options: config.localization.locales.map((locale)=>{
                    if (typeof locale === 'string') {
                        return locale;
                    }
                    return locale.code;
                })
            });
        }
        fields.push({
            name: 'latest',
            type: 'checkbox',
            admin: {
                disabled: true
            },
            index: true
        });
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasAutosaveEnabled"])(global)) {
            fields.push({
                name: 'autosave',
                type: 'checkbox',
                index: true
            });
        }
    }
    return fields;
}; //# sourceMappingURL=buildGlobalFields.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/getLatestGlobalVersion.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLatestGlobalVersion",
    ()=>getLatestGlobalVersion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/getVersionsConfig.js [app-rsc] (ecmascript)");
;
const getLatestGlobalVersion = async ({ slug, config, locale, payload, published, req, where })=>{
    let latestVersion;
    const whereQuery = published ? {
        'version._status': {
            equals: 'published'
        }
    } : {
        latest: {
            equals: true
        }
    };
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasDraftsEnabled"])(config)) {
        latestVersion = (await payload.db.findGlobalVersions({
            global: slug,
            limit: 1,
            locale: locale || req?.locale || undefined,
            pagination: false,
            req,
            where: whereQuery
        })).docs[0];
    }
    const global = await payload.db.findGlobal({
        slug,
        locale,
        req,
        where
    });
    const globalExists = Boolean(global);
    if (!latestVersion) {
        return {
            global,
            globalExists
        };
    }
    if (!latestVersion.version.createdAt) {
        latestVersion.version.createdAt = latestVersion.createdAt;
    }
    if (!latestVersion.version.updatedAt) {
        latestVersion.version.updatedAt = latestVersion.updatedAt;
    }
    return {
        global: latestVersion.version,
        globalExists
    };
}; //# sourceMappingURL=getLatestGlobalVersion.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/payloadPackageList.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PAYLOAD_PACKAGE_LIST",
    ()=>PAYLOAD_PACKAGE_LIST
]);
const PAYLOAD_PACKAGE_LIST = [
    'payload',
    '@payloadcms/bundler-vite',
    '@payloadcms/bundler-webpack',
    '@payloadcms/db-d1-sqlite',
    '@payloadcms/db-mongodb',
    '@payloadcms/db-postgres',
    '@payloadcms/db-sqlite',
    '@payloadcms/db-vercel-postgres',
    '@payloadcms/drizzle',
    '@payloadcms/ecommerce',
    '@payloadcms/email-nodemailer',
    '@payloadcms/email-resend',
    '@payloadcms/graphql',
    '@payloadcms/live-preview',
    '@payloadcms/live-preview-react',
    '@payloadcms/live-preview-vue',
    '@payloadcms/kv-redis',
    '@payloadcms/next/utilities',
    '@payloadcms/payload-cloud',
    '@payloadcms/plugin-cloud-storage',
    '@payloadcms/plugin-form-builder',
    '@payloadcms/plugin-import-export',
    '@payloadcms/plugin-mcp',
    '@payloadcms/plugin-multi-tenant',
    '@payloadcms/plugin-nested-docs',
    '@payloadcms/plugin-redirects',
    '@payloadcms/plugin-search',
    '@payloadcms/plugin-seo',
    '@payloadcms/plugin-stripe',
    '@payloadcms/plugin-zapier',
    '@payloadcms/typescript-plugin',
    '@payloadcms/richtext-lexical',
    '@payloadcms/richtext-slate',
    '@payloadcms/sdk',
    '@payloadcms/storage-azure',
    '@payloadcms/storage-gcs',
    '@payloadcms/storage-r2',
    '@payloadcms/storage-s3',
    '@payloadcms/storage-uploadthing',
    '@payloadcms/storage-vercel-blob',
    '@payloadcms/translations',
    '@payloadcms/ui/shared'
]; //# sourceMappingURL=payloadPackageList.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/buildVersionCompoundIndexes.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildVersionCompoundIndexes",
    ()=>buildVersionCompoundIndexes
]);
const buildVersionCompoundIndexes = ({ indexes })=>{
    return indexes.map((each)=>({
            fields: each.fields.map(({ field, localizedPath, path, pathHasLocalized })=>({
                    field,
                    localizedPath: `version.${localizedPath}`,
                    path: `version.${path}`,
                    pathHasLocalized
                })),
            unique: false
        }));
}; //# sourceMappingURL=buildVersionCompoundIndexes.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/schedule/job.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSchedulePublishTask",
    ()=>getSchedulePublishTask
]);
const getSchedulePublishTask = ({ adminUserSlug, collections, globals })=>{
    return {
        slug: 'schedulePublish',
        handler: async ({ input, req })=>{
            const _status = input?.type === 'publish' || !input?.type ? 'published' : 'draft';
            const userID = input.user;
            let user = null;
            if (userID) {
                user = await req.payload.findByID({
                    id: userID,
                    collection: adminUserSlug,
                    depth: 0
                });
                user.collection = adminUserSlug;
            }
            let publishSpecificLocale;
            if (input?.type === 'publish' && input.locale && req.payload.config.localization) {
                const matchedLocale = req.payload.config.localization.locales.find(({ code })=>code === input.locale);
                if (matchedLocale) {
                    publishSpecificLocale = input.locale;
                }
            }
            if (input.doc) {
                await req.payload.update({
                    id: input.doc.value,
                    collection: input.doc.relationTo,
                    data: {
                        _status
                    },
                    depth: 0,
                    overrideAccess: user === null,
                    publishSpecificLocale: publishSpecificLocale,
                    user
                });
            }
            if (input.global) {
                await req.payload.updateGlobal({
                    slug: input.global,
                    data: {
                        _status
                    },
                    depth: 0,
                    overrideAccess: user === null,
                    publishSpecificLocale: publishSpecificLocale,
                    user
                });
            }
            return {
                output: {}
            };
        },
        inputSchema: [
            {
                name: 'type',
                type: 'radio',
                defaultValue: 'publish',
                options: [
                    'publish',
                    'unpublish'
                ]
            },
            {
                name: 'locale',
                type: 'text'
            },
            ...collections.length > 0 ? [
                {
                    name: 'doc',
                    type: 'relationship',
                    relationTo: collections
                }
            ] : [],
            {
                name: 'global',
                type: 'select',
                options: globals
            },
            {
                name: 'user',
                type: 'relationship',
                relationTo: adminUserSlug
            }
        ]
    };
}; //# sourceMappingURL=job.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/duplicateDocument/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDuplicateDocumentData",
    ()=>getDuplicateDocumentData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/auth/executeAccess.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/auth/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/combineQueries.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/Forbidden.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/NotFound.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/fields/hooks/afterRead/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/fields/hooks/beforeDuplicate/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/deepCopyObject.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$filterDataToSelectedLocales$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/filterDataToSelectedLocales.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$getLatestCollectionVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/getLatestCollectionVersion.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const getDuplicateDocumentData = async ({ id, collectionConfig, draftArg, overrideAccess, req, selectedLocales })=>{
    const { payload } = req;
    // /////////////////////////////////////
    // Read Access
    // /////////////////////////////////////
    const accessResults = !overrideAccess ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["executeAccess"])({
        id,
        req
    }, collectionConfig.access.read) : true;
    const hasWherePolicy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasWhereAccessResult"])(accessResults);
    // /////////////////////////////////////
    // Retrieve document
    // /////////////////////////////////////
    const findOneArgs = {
        collection: collectionConfig.slug,
        locale: req.locale,
        req,
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["combineQueries"])({
            id: {
                equals: id
            }
        }, accessResults)
    };
    let duplicatedFromDocWithLocales = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$getLatestCollectionVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLatestCollectionVersion"])({
        id,
        config: collectionConfig,
        payload,
        query: findOneArgs,
        req
    });
    if (selectedLocales && selectedLocales.length > 0 && duplicatedFromDocWithLocales) {
        duplicatedFromDocWithLocales = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$filterDataToSelectedLocales$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterDataToSelectedLocales"])({
            configBlockReferences: payload.config.blocks,
            docWithLocales: duplicatedFromDocWithLocales,
            fields: collectionConfig.fields,
            selectedLocales
        });
    }
    if (!duplicatedFromDocWithLocales && !hasWherePolicy) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NotFound"](req.t);
    }
    if (!duplicatedFromDocWithLocales && hasWherePolicy) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Forbidden"](req.t);
    }
    // remove the createdAt timestamp and rely on the db to set it
    if ('createdAt' in duplicatedFromDocWithLocales) {
        delete duplicatedFromDocWithLocales.createdAt;
    }
    // remove the id and rely on the db to set it
    if ('id' in duplicatedFromDocWithLocales) {
        delete duplicatedFromDocWithLocales.id;
    }
    duplicatedFromDocWithLocales = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["beforeDuplicate"])({
        id,
        collection: collectionConfig,
        context: req.context,
        doc: duplicatedFromDocWithLocales,
        overrideAccess: overrideAccess,
        req
    });
    const duplicatedFromDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["afterRead"])({
        collection: collectionConfig,
        context: req.context,
        depth: 0,
        doc: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(duplicatedFromDocWithLocales),
        draft: draftArg,
        fallbackLocale: null,
        global: null,
        locale: req.locale,
        overrideAccess: true,
        req,
        showHiddenFields: true
    });
    return {
        duplicatedFromDoc,
        duplicatedFromDocWithLocales
    };
}; //# sourceMappingURL=index.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/preferences/operations/delete.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteOperation",
    ()=>deleteOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/NotFound.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$UnauthorizedError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/UnauthorizedError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/preferences/config.js [app-rsc] (ecmascript)");
;
;
;
async function deleteOperation(args) {
    const { key, req: { payload }, req, user } = args;
    if (!user) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$UnauthorizedError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UnauthorizedError"](req.t);
    }
    const where = {
        and: [
            {
                key: {
                    equals: key
                }
            },
            {
                'user.value': {
                    equals: user.id
                }
            },
            {
                'user.relationTo': {
                    equals: user.collection
                }
            }
        ]
    };
    const result = await payload.db.deleteOne({
        collection: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["preferencesCollectionSlug"],
        req,
        where
    });
    if (result) {
        return result;
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NotFound"](req.t);
} //# sourceMappingURL=delete.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/preferences/requestHandlers/delete.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteHandler",
    ()=>deleteHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-rsc] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$operations$2f$delete$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/preferences/operations/delete.js [app-rsc] (ecmascript)");
;
;
const deleteHandler = async (incomingReq)=>{
    // We cannot import the addDataAndFileToRequest utility here from the 'next' package because of dependency issues
    // However that utility should be used where possible instead of manually appending the data
    let data;
    try {
        data = await incomingReq.json?.();
    } catch (ignore) {
        data = {};
    }
    const reqWithData = incomingReq;
    if (data) {
        reqWithData.data = data;
        // @ts-expect-error
        reqWithData.json = ()=>Promise.resolve(data);
    }
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$operations$2f$delete$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteOperation"])({
        key: reqWithData.routeParams?.key,
        req: reqWithData,
        user: reqWithData.user
    });
    return Response.json({
        ...result,
        message: reqWithData.t('general:deletedSuccessfully')
    }, {
        status: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].OK
    });
}; //# sourceMappingURL=delete.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/preferences/operations/findOne.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findOne",
    ()=>findOne
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/preferences/config.js [app-rsc] (ecmascript)");
;
async function findOne(args) {
    const { key, req: { payload }, req, user } = args;
    if (!user) {
        return null;
    }
    const where = {
        and: [
            {
                key: {
                    equals: key
                }
            },
            {
                'user.value': {
                    equals: user.id
                }
            },
            {
                'user.relationTo': {
                    equals: user.collection
                }
            }
        ]
    };
    const { docs } = await payload.db.find({
        collection: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["preferencesCollectionSlug"],
        limit: 1,
        pagination: false,
        req,
        sort: '-updatedAt',
        where
    });
    return docs?.[0] || null;
} //# sourceMappingURL=findOne.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/preferences/requestHandlers/findOne.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findByIDHandler",
    ()=>findByIDHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-rsc] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$operations$2f$findOne$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/preferences/operations/findOne.js [app-rsc] (ecmascript)");
;
;
const findByIDHandler = async (incomingReq)=>{
    // We cannot import the addDataAndFileToRequest utility here from the 'next' package because of dependency issues
    // However that utility should be used where possible instead of manually appending the data
    let data;
    try {
        data = await incomingReq.json?.();
    } catch (ignore) {
        data = {};
    }
    const reqWithData = incomingReq;
    if (data) {
        reqWithData.data = data;
        // @ts-expect-error
        reqWithData.json = ()=>Promise.resolve(data);
    }
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$operations$2f$findOne$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findOne"])({
        key: reqWithData.routeParams?.key,
        req: reqWithData,
        user: reqWithData.user
    });
    return Response.json({
        ...result ? result : {
            message: reqWithData.t('general:notFound'),
            value: null
        }
    }, {
        status: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].OK
    });
}; //# sourceMappingURL=findOne.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/preferences/operations/update.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "update",
    ()=>update
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$UnauthorizedError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/UnauthorizedError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/preferences/config.js [app-rsc] (ecmascript)");
;
;
async function update(args) {
    const { key, req: { payload }, req, user, value } = args;
    if (!user) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$UnauthorizedError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UnauthorizedError"](req.t);
    }
    const where = {
        and: [
            {
                key: {
                    equals: key
                }
            },
            {
                'user.value': {
                    equals: user.id
                }
            },
            {
                'user.relationTo': {
                    equals: user.collection
                }
            }
        ]
    };
    const preference = {
        key,
        user: {
            relationTo: user.collection,
            value: user.id
        },
        value
    };
    return await payload.db.upsert({
        collection: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["preferencesCollectionSlug"],
        data: preference,
        req,
        where
    });
} //# sourceMappingURL=update.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/preferences/requestHandlers/update.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateHandler",
    ()=>updateHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-rsc] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$operations$2f$update$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/preferences/operations/update.js [app-rsc] (ecmascript)");
;
;
const updateHandler = async (incomingReq)=>{
    // We cannot import the addDataAndFileToRequest utility here from the 'next' package because of dependency issues
    // However that utility should be used where possible instead of manually appending the data
    let data;
    try {
        data = await incomingReq.json?.();
    } catch (_err) {
        data = {};
    }
    const reqWithData = incomingReq;
    if (data) {
        reqWithData.data = data;
        // @ts-expect-error
        reqWithData.json = ()=>Promise.resolve(data);
    }
    const doc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$operations$2f$update$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["update"])({
        key: reqWithData.routeParams?.key,
        req: reqWithData,
        user: reqWithData?.user,
        value: reqWithData.data?.value || reqWithData.data
    });
    return Response.json({
        doc,
        message: reqWithData.t('general:updatedSuccessfully')
    }, {
        status: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].OK
    });
}; //# sourceMappingURL=update.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/preferences/config.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPreferencesCollection",
    ()=>getPreferencesCollection,
    "preferencesCollectionSlug",
    ()=>preferencesCollectionSlug
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$requestHandlers$2f$delete$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/preferences/requestHandlers/delete.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$requestHandlers$2f$findOne$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/preferences/requestHandlers/findOne.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$requestHandlers$2f$update$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/preferences/requestHandlers/update.js [app-rsc] (ecmascript)");
;
;
;
const preferenceAccess = ({ req })=>{
    if (!req.user) {
        return false;
    }
    const userValueCondition = {
        'user.value': {
            equals: req.user.id
        }
    };
    const userRelationCondition = {
        'user.relationTo': {
            equals: req.user.collection
        }
    };
    return {
        and: [
            userValueCondition,
            userRelationCondition
        ]
    };
};
const preferencesCollectionSlug = 'payload-preferences';
const getPreferencesCollection = (config)=>({
        slug: preferencesCollectionSlug,
        access: {
            delete: preferenceAccess,
            read: preferenceAccess
        },
        admin: {
            hidden: true
        },
        endpoints: [
            {
                handler: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$requestHandlers$2f$findOne$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findByIDHandler"],
                method: 'get',
                path: '/:key'
            },
            {
                handler: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$requestHandlers$2f$delete$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteHandler"],
                method: 'delete',
                path: '/:key'
            },
            {
                handler: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$requestHandlers$2f$update$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateHandler"],
                method: 'post',
                path: '/:key'
            }
        ],
        fields: [
            {
                name: 'user',
                type: 'relationship',
                hooks: {
                    beforeValidate: [
                        ({ req })=>{
                            if (!req?.user) {
                                return null;
                            }
                            return {
                                relationTo: req?.user.collection,
                                value: req?.user.id
                            };
                        }
                    ]
                },
                index: true,
                relationTo: config.collections.filter((collectionConfig)=>collectionConfig.auth).map((collectionConfig)=>collectionConfig.slug),
                required: true
            },
            {
                name: 'key',
                type: 'text',
                index: true
            },
            {
                name: 'value',
                type: 'json',
                validate: (value)=>{
                    if (value) {
                        try {
                            JSON.parse(JSON.stringify(value));
                        } catch  {
                            return 'Invalid JSON';
                        }
                    }
                    return true;
                }
            }
        ],
        lockDocuments: false
    }); //# sourceMappingURL=config.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/preferences/deleteUserPreferences.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteUserPreferences",
    ()=>deleteUserPreferences
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/preferences/config.js [app-rsc] (ecmascript)");
;
const deleteUserPreferences = async ({ collectionConfig, ids, payload, req })=>{
    if (collectionConfig.auth) {
        await payload.db.deleteMany({
            collection: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["preferencesCollectionSlug"],
            req,
            where: {
                or: [
                    {
                        and: [
                            {
                                'user.value': {
                                    in: ids
                                }
                            },
                            {
                                'user.relationTo': {
                                    equals: collectionConfig.slug
                                }
                            }
                        ]
                    },
                    {
                        key: {
                            in: ids.map((id)=>`collection-${collectionConfig.slug}-${id}`)
                        }
                    }
                ]
            }
        });
    } else {
        await payload.db.deleteMany({
            collection: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["preferencesCollectionSlug"],
            req,
            where: {
                key: {
                    in: ids.map((id)=>`collection-${collectionConfig.slug}-${id}`)
                }
            }
        });
    }
}; //# sourceMappingURL=deleteUserPreferences.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/locked-documents/config.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLockedDocumentsCollection",
    ()=>getLockedDocumentsCollection,
    "lockedDocumentsCollectionSlug",
    ()=>lockedDocumentsCollectionSlug
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/auth/defaultAccess.js [app-rsc] (ecmascript)");
;
const lockedDocumentsCollectionSlug = 'payload-locked-documents';
const getLockedDocumentsCollection = (config)=>{
    const lockableCollections = config.collections.filter((collectionConfig)=>collectionConfig.lockDocuments !== false).map((collectionConfig)=>collectionConfig.slug);
    const lockableGlobals = config.globals ? config.globals.filter((globalConfig)=>globalConfig.lockDocuments !== false) : [];
    const authCollections = config.collections.filter((collectionConfig)=>collectionConfig.auth).map((collectionConfig)=>collectionConfig.slug);
    // If there are no lockable collections AND no lockable globals, don't create the collection
    if (lockableCollections.length === 0 && lockableGlobals.length === 0) {
        return null;
    }
    // If there are no auth collections, we can't track who locked the document
    // so we shouldn't create the locked-documents collection
    if (authCollections.length === 0) {
        return null;
    }
    const fields = [];
    // Only include the document field if there are lockable collections
    if (lockableCollections.length > 0) {
        fields.push({
            name: 'document',
            type: 'relationship',
            index: true,
            maxDepth: 0,
            relationTo: lockableCollections
        });
    }
    // Always include globalSlug field for tracking global locks
    fields.push({
        name: 'globalSlug',
        type: 'text',
        index: true
    });
    // Always include user field
    fields.push({
        name: 'user',
        type: 'relationship',
        maxDepth: 1,
        relationTo: authCollections,
        required: true
    });
    return {
        slug: lockedDocumentsCollectionSlug,
        access: {
            create: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultAccess"],
            delete: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultAccess"],
            read: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultAccess"],
            update: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultAccess"]
        },
        admin: {
            hidden: true
        },
        fields,
        lockDocuments: false
    };
}; //# sourceMappingURL=config.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/bin/generateImportMap/iterateFields.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "genImportMapIterateFields",
    ()=>genImportMapIterateFields
]);
/* eslint-disable @typescript-eslint/no-unused-expressions */ function hasKey(obj, key) {
    return obj != null && Object.prototype.hasOwnProperty.call(obj, key);
}
const defaultUIFieldComponentKeys = [
    'Cell',
    'Description',
    'Field',
    'Filter'
];
function genImportMapIterateFields({ addToImportMap, baseDir, config, fields, importMap, imports }) {
    for (const field of fields){
        if ('fields' in field) {
            genImportMapIterateFields({
                addToImportMap,
                baseDir,
                config,
                fields: field.fields,
                importMap,
                imports
            });
        } else if (field.type === 'blocks') {
            genImportMapIterateFields({
                addToImportMap,
                baseDir,
                config,
                fields: field.blocks.filter((block)=>typeof block !== 'string'),
                importMap,
                imports
            });
        } else if (field.type === 'tabs') {
            genImportMapIterateFields({
                addToImportMap,
                baseDir,
                config,
                fields: field.tabs,
                importMap,
                imports
            });
        } else if (field.type === 'richText') {
            if (field?.editor && typeof field.editor === 'object' && field.editor.generateImportMap && typeof field.editor.generateImportMap === 'function') {
                field.editor.generateImportMap({
                    addToImportMap,
                    baseDir,
                    config,
                    importMap,
                    imports
                });
            }
        } else if (field.type === 'ui') {
            if (field?.admin?.components) {
                // Render any extra, untyped components
                for(const key in field.admin.components){
                    if (key in defaultUIFieldComponentKeys) {
                        continue;
                    }
                    addToImportMap(field.admin.components[key]);
                }
            }
        }
        hasKey(field?.admin, 'jsx') && addToImportMap(field.admin.jsx); // For Blocks
        hasKey(field?.admin?.components, 'Label') && addToImportMap(field.admin.components.Label);
        hasKey(field?.admin?.components, 'Block') && addToImportMap(field.admin.components.Block);
        hasKey(field?.admin?.components, 'Cell') && addToImportMap(field?.admin?.components?.Cell);
        hasKey(field?.admin?.components, 'Description') && addToImportMap(field?.admin?.components?.Description);
        hasKey(field?.admin?.components, 'Field') && addToImportMap(field?.admin?.components?.Field);
        hasKey(field?.admin?.components, 'Filter') && addToImportMap(field?.admin?.components?.Filter);
        hasKey(field?.admin?.components, 'Error') && addToImportMap(field?.admin?.components?.Error);
        hasKey(field?.admin?.components, 'afterInput') && addToImportMap(field?.admin?.components?.afterInput);
        hasKey(field?.admin?.components, 'beforeInput') && addToImportMap(field?.admin?.components?.beforeInput);
        hasKey(field?.admin?.components, 'RowLabel') && addToImportMap(field?.admin?.components?.RowLabel);
        hasKey(field?.admin?.components, 'Diff') && addToImportMap(field?.admin?.components?.Diff);
    }
} //# sourceMappingURL=iterateFields.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/bin/generateImportMap/iterateCollections.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "iterateCollections",
    ()=>iterateCollections
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/bin/generateImportMap/iterateFields.js [app-rsc] (ecmascript)");
;
function iterateCollections({ addToImportMap, baseDir, collections, config, importMap, imports }) {
    for (const collection of collections){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["genImportMapIterateFields"])({
            addToImportMap,
            baseDir,
            config,
            fields: collection.fields,
            importMap,
            imports
        });
        addToImportMap(collection.admin?.components?.afterList);
        addToImportMap(collection.admin?.components?.listMenuItems);
        addToImportMap(collection.admin?.components?.afterListTable);
        addToImportMap(collection.admin?.components?.beforeList);
        addToImportMap(collection.admin?.components?.beforeListTable);
        addToImportMap(collection.admin?.components?.Description);
        addToImportMap(collection.admin?.components?.edit?.beforeDocumentControls);
        addToImportMap(collection.admin?.components?.edit?.editMenuItems);
        addToImportMap(collection.admin?.components?.edit?.PreviewButton);
        addToImportMap(collection.admin?.components?.edit?.PublishButton);
        addToImportMap(collection.admin?.components?.edit?.SaveButton);
        addToImportMap(collection.admin?.components?.edit?.SaveDraftButton);
        addToImportMap(collection.admin?.components?.edit?.Status);
        addToImportMap(collection.admin?.components?.edit?.UnpublishButton);
        addToImportMap(collection.admin?.components?.edit?.Upload);
        if (collection.upload?.admin?.components?.controls) {
            addToImportMap(collection.upload?.admin?.components?.controls);
        }
        if (collection.admin?.components?.views?.edit) {
            for (const editViewConfig of Object.values(collection.admin?.components?.views?.edit)){
                if ('Component' in editViewConfig) {
                    addToImportMap(editViewConfig?.Component);
                }
                if ('actions' in editViewConfig) {
                    addToImportMap(editViewConfig?.actions);
                }
                if ('tab' in editViewConfig) {
                    addToImportMap(editViewConfig?.tab?.Component);
                    addToImportMap(editViewConfig?.tab?.Pill);
                }
            }
        }
        addToImportMap(collection.admin?.components?.views?.list?.Component);
        addToImportMap(collection.admin?.components?.views?.list?.actions);
    }
} //# sourceMappingURL=iterateCollections.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/bin/generateImportMap/iterateGlobals.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "iterateGlobals",
    ()=>iterateGlobals
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/bin/generateImportMap/iterateFields.js [app-rsc] (ecmascript)");
;
function iterateGlobals({ addToImportMap, baseDir, config, globals, importMap, imports }) {
    for (const global of globals){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["genImportMapIterateFields"])({
            addToImportMap,
            baseDir,
            config,
            fields: global.fields,
            importMap,
            imports
        });
        addToImportMap(global.admin?.components?.elements?.beforeDocumentControls);
        addToImportMap(global.admin?.components?.elements?.Description);
        addToImportMap(global.admin?.components?.elements?.PreviewButton);
        addToImportMap(global.admin?.components?.elements?.PublishButton);
        addToImportMap(global.admin?.components?.elements?.SaveButton);
        addToImportMap(global.admin?.components?.elements?.SaveDraftButton);
        addToImportMap(global.admin?.components?.elements?.Status);
        addToImportMap(global.admin?.components?.elements?.UnpublishButton);
        if (global.admin?.components?.views?.edit) {
            for (const editViewConfig of Object.values(global.admin?.components?.views?.edit)){
                if ('Component' in editViewConfig) {
                    addToImportMap(editViewConfig?.Component);
                }
                if ('actions' in editViewConfig) {
                    addToImportMap(editViewConfig?.actions);
                }
                if ('tab' in editViewConfig) {
                    addToImportMap(editViewConfig?.tab?.Component);
                    addToImportMap(editViewConfig?.tab?.Pill);
                }
            }
        }
    }
} //# sourceMappingURL=iterateGlobals.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/bin/generateImportMap/iterateConfig.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "iterateConfig",
    ()=>iterateConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateCollections$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/bin/generateImportMap/iterateCollections.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/bin/generateImportMap/iterateFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateGlobals$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/bin/generateImportMap/iterateGlobals.js [app-rsc] (ecmascript)");
;
;
;
function iterateConfig({ addToImportMap, baseDir, config, importMap, imports }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateCollections$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateCollections"])({
        addToImportMap,
        baseDir,
        collections: config.collections,
        config,
        importMap,
        imports
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateGlobals$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateGlobals"])({
        addToImportMap,
        baseDir,
        config,
        globals: config.globals,
        importMap,
        imports
    });
    if (config?.blocks) {
        const blocks = Object.values(config.blocks);
        if (blocks?.length) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["genImportMapIterateFields"])({
                addToImportMap,
                baseDir,
                config,
                fields: blocks,
                importMap,
                imports
            });
        }
    }
    if (typeof config.admin?.avatar === 'object') {
        addToImportMap(config.admin?.avatar?.Component);
    }
    addToImportMap(config.admin?.components?.Nav);
    addToImportMap(config.admin?.components?.header);
    addToImportMap(config.admin?.components?.logout?.Button);
    addToImportMap(config.admin?.components?.settingsMenu);
    addToImportMap(config.admin?.components?.graphics?.Icon);
    addToImportMap(config.admin?.components?.graphics?.Logo);
    addToImportMap(config.admin?.components?.actions);
    addToImportMap(config.admin?.components?.afterDashboard);
    addToImportMap(config.admin?.components?.afterLogin);
    addToImportMap(config.admin?.components?.afterNav);
    addToImportMap(config.admin?.components?.afterNavLinks);
    addToImportMap(config.admin?.components?.beforeDashboard);
    addToImportMap(config.admin?.components?.beforeLogin);
    addToImportMap(config.admin?.components?.beforeNav);
    addToImportMap(config.admin?.components?.beforeNavLinks);
    addToImportMap(config.admin?.components?.providers);
    if (config.admin?.components?.views) {
        if (Object.keys(config.admin?.components?.views)?.length) {
            for(const key in config.admin?.components?.views){
                const adminViewConfig = config.admin?.components?.views[key];
                addToImportMap(adminViewConfig?.Component);
            }
        }
    }
    if (config.admin?.dashboard?.widgets?.length) {
        for (const dashboardWidget of config.admin.dashboard.widgets){
            addToImportMap(dashboardWidget.ComponentPath);
            if (dashboardWidget.fields?.length) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["genImportMapIterateFields"])({
                    addToImportMap,
                    baseDir,
                    config,
                    fields: dashboardWidget.fields,
                    importMap,
                    imports
                });
            }
        }
    }
    if (config?.admin?.importMap?.generators?.length) {
        for (const generator of config.admin.importMap.generators){
            generator({
                addToImportMap,
                baseDir,
                config,
                importMap,
                imports
            });
        }
    }
    if (config?.admin?.dependencies) {
        for (const dependency of Object.values(config.admin.dependencies)){
            addToImportMap(dependency.path);
        }
    }
/*
  if (
    config?.editor &&
    typeof config.editor === 'object' &&
    config.editor.generateImportMap &&
    typeof config.editor.generateImportMap === 'function'
  ) {
    config.editor.generateImportMap({
      addToImportMap,
      baseDir,
      componentMap,
      config,
      importMap,
    })
  }*/ // No need to do that here since in the sanitized editor config, this root editor is already added to the field editor - and we already process that in iterateFields
} //# sourceMappingURL=iterateConfig.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/bin/generateImportMap/utilities/parsePayloadComponent.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parsePayloadComponent",
    ()=>parsePayloadComponent
]);
function parsePayloadComponent(PayloadComponent) {
    if (!PayloadComponent) {
        return null;
    }
    const pathAndMaybeExport = typeof PayloadComponent === 'string' ? PayloadComponent : PayloadComponent.path;
    let path;
    let exportName;
    if (pathAndMaybeExport.includes('#')) {
        ;
        [path, exportName] = pathAndMaybeExport.split('#', 2);
    } else {
        path = pathAndMaybeExport;
        exportName = 'default';
    }
    if (typeof PayloadComponent === 'object' && PayloadComponent.exportName) {
        exportName = PayloadComponent.exportName;
    }
    return {
        exportName,
        path
    };
} //# sourceMappingURL=parsePayloadComponent.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/bin/generateImportMap/utilities/addPayloadComponentToImportMap.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addPayloadComponentToImportMap",
    ()=>addPayloadComponentToImportMap
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$utilities$2f$parsePayloadComponent$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/bin/generateImportMap/utilities/parsePayloadComponent.js [app-rsc] (ecmascript)");
;
;
;
/**
 * Normalizes the component path based on the import map's base directory path.
 */ function getAdjustedComponentPath(importMapToBaseDirPath, componentPath) {
    // Normalize input paths to use forward slashes
    const normalizedBasePath = importMapToBaseDirPath.replace(/\\/g, '/');
    const normalizedComponentPath = componentPath.replace(/\\/g, '/');
    // Base path starts with './' - preserve the './' prefix
    // => import map is in a subdirectory of the base directory, or in the same directory as the base directory
    if (normalizedBasePath.startsWith('./')) {
        // Remove './' from component path if it exists
        const cleanComponentPath = normalizedComponentPath.startsWith('./') ? normalizedComponentPath.substring(2) : normalizedComponentPath;
        // Join the paths to preserve the './' prefix
        return `${normalizedBasePath}${cleanComponentPath}`;
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].posix.join(normalizedBasePath, normalizedComponentPath);
}
function addPayloadComponentToImportMap({ importMap, importMapToBaseDirPath, imports, payloadComponent }) {
    if (!payloadComponent) {
        return null;
    }
    const { exportName, path: componentPath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$utilities$2f$parsePayloadComponent$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePayloadComponent"])(payloadComponent);
    if (importMap[componentPath + '#' + exportName]) {
        return null;
    }
    const importIdentifier = exportName + '_' + __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash('md5').update(componentPath).digest('hex');
    importMap[componentPath + '#' + exportName] = importIdentifier;
    const isRelativePath = componentPath.startsWith('.') || componentPath.startsWith('/');
    if (isRelativePath) {
        const adjustedComponentPath = getAdjustedComponentPath(importMapToBaseDirPath, componentPath);
        imports[importIdentifier] = {
            path: adjustedComponentPath,
            specifier: exportName
        };
        return {
            path: adjustedComponentPath,
            specifier: exportName
        };
    } else {
        // Tsconfig alias or package import, e.g. '@payloadcms/ui' or '@/components/MyComponent'
        imports[importIdentifier] = {
            path: componentPath,
            specifier: exportName
        };
        return {
            path: componentPath,
            specifier: exportName
        };
    }
} //# sourceMappingURL=addPayloadComponentToImportMap.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/bin/generateImportMap/utilities/getImportMapToBaseDirPath.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getImportMapToBaseDirPath",
    ()=>getImportMapToBaseDirPath
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
function getImportMapToBaseDirPath({ baseDir, importMapPath }) {
    const importMapDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(importMapPath);
    // 1. Direct relative path from `importMapDir` -> `baseDir`
    let relativePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].relative(importMapDir, baseDir).replace(/\\/g, '/');
    // 2. If they're the same directory, path.relative will be "", so use "./"
    if (!relativePath) {
        relativePath = './';
    } else if (!relativePath.startsWith('.') && !relativePath.startsWith('/')) {
        relativePath = `./${relativePath}`;
    }
    // 3. For consistency ensure a trailing slash
    if (!relativePath.endsWith('/')) {
        relativePath += '/';
    }
    return relativePath;
} //# sourceMappingURL=getImportMapToBaseDirPath.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/bin/generateImportMap/utilities/resolveImportMapFilePath.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveImportMapFilePath",
    ()=>resolveImportMapFilePath
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
async function pathOrFileExists(path) {
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].access(path);
        return true;
    } catch  {
        return false;
    }
}
async function resolveImportMapFilePath({ adminRoute = '/admin', importMapFile, rootDir }) {
    let importMapFilePath = undefined;
    if (importMapFile?.length) {
        if (!await pathOrFileExists(importMapFile)) {
            try {
                await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(importMapFile, '', {
                    flag: 'wx'
                });
            } catch (err) {
                return new Error(`Could not find the import map file at ${importMapFile}${err instanceof Error && err?.message ? `: ${err.message}` : ''}`);
            }
        }
        importMapFilePath = importMapFile;
    } else {
        const appLocation = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(rootDir, `app/(payload)${adminRoute}/`);
        const srcAppLocation = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(rootDir, `src/app/(payload)${adminRoute}/`);
        if (appLocation && await pathOrFileExists(appLocation)) {
            importMapFilePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(appLocation, 'importMap.js');
            if (!await pathOrFileExists(importMapFilePath)) {
                await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(importMapFilePath, '', {
                    flag: 'wx'
                });
            }
        } else if (srcAppLocation && await pathOrFileExists(srcAppLocation)) {
            importMapFilePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(srcAppLocation, 'importMap.js');
            if (!await pathOrFileExists(importMapFilePath)) {
                await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(importMapFilePath, '', {
                    flag: 'wx'
                });
            }
        } else {
            return new Error(`Could not find Payload import map folder. Looked in ${appLocation} and ${srcAppLocation}`);
        }
    }
    return importMapFilePath;
} //# sourceMappingURL=resolveImportMapFilePath.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/bin/generateImportMap/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateImportMap",
    ()=>generateImportMap,
    "writeImportMap",
    ()=>writeImportMap
]);
/* eslint-disable no-console */ var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:process [external] (node:process, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/bin/generateImportMap/iterateConfig.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$utilities$2f$addPayloadComponentToImportMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/bin/generateImportMap/utilities/addPayloadComponentToImportMap.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$utilities$2f$getImportMapToBaseDirPath$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/bin/generateImportMap/utilities/getImportMapToBaseDirPath.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$utilities$2f$resolveImportMapFilePath$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/bin/generateImportMap/utilities/resolveImportMapFilePath.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function generateImportMap(config, options) {
    const shouldLog = options?.log ?? true;
    if (shouldLog) {
        console.log('Generating import map');
    }
    const importMap = {};
    const imports = {};
    // Determine the root directory of the project - usually the directory where the src or app folder is located
    const rootDir = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"].env.ROOT_DIR ?? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"].cwd();
    const baseDir = config.admin.importMap.baseDir ?? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"].cwd();
    const importMapFilePath = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$utilities$2f$resolveImportMapFilePath$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveImportMapFilePath"])({
        adminRoute: config.routes.admin,
        importMapFile: config?.admin?.importMap?.importMapFile,
        rootDir
    });
    if (importMapFilePath instanceof Error) {
        if (options?.ignoreResolveError) {
            return;
        } else {
            throw importMapFilePath;
        }
    }
    const importMapToBaseDirPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$utilities$2f$getImportMapToBaseDirPath$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getImportMapToBaseDirPath"])({
        baseDir,
        importMapPath: importMapFilePath
    });
    const addToImportMap = (payloadComponent)=>{
        if (!payloadComponent) {
            return;
        }
        if (typeof payloadComponent !== 'object' && typeof payloadComponent !== 'string') {
            console.error(payloadComponent);
            throw new Error('addToImportMap > Payload component must be an object or a string');
        }
        if (Array.isArray(payloadComponent)) {
            for (const component of payloadComponent){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$utilities$2f$addPayloadComponentToImportMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addPayloadComponentToImportMap"])({
                    importMap,
                    importMapToBaseDirPath,
                    imports,
                    payloadComponent: component
                });
            }
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$utilities$2f$addPayloadComponentToImportMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addPayloadComponentToImportMap"])({
                importMap,
                importMapToBaseDirPath,
                imports,
                payloadComponent
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateConfig"])({
        addToImportMap,
        baseDir: config.admin.importMap.baseDir,
        config,
        importMap,
        imports
    });
    await writeImportMap({
        componentMap: importMap,
        force: options?.force,
        importMap: imports,
        importMapFilePath,
        log: shouldLog
    });
}
async function writeImportMap({ componentMap, force, importMap, importMapFilePath, log }) {
    const imports = [];
    for (const [identifier, { path, specifier }] of Object.entries(importMap)){
        imports.push(`import { ${specifier} as ${identifier} } from '${path}'`);
    }
    const mapKeys = [];
    for (const [userPath, identifier] of Object.entries(componentMap)){
        mapKeys.push(`  "${userPath}": ${identifier}`);
    }
    const importMapOutputFile = `${imports.join('\n')}

export const importMap = {
${mapKeys.join(',\n')}
}
`;
    if (!force) {
        // Read current import map and check in the IMPORTS if there are any new imports. If not, don't write the file.
        const currentImportMap = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(importMapFilePath, 'utf-8');
        if (currentImportMap?.trim() === importMapOutputFile?.trim()) {
            if (log) {
                console.log('No new imports found, skipping writing import map');
            }
            return;
        }
    }
    if (log) {
        console.log('Writing import map to', importMapFilePath);
    }
    await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(importMapFilePath, importMapOutputFile);
} //# sourceMappingURL=index.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/checkPayloadDependencies.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkPayloadDependencies",
    ()=>checkPayloadDependencies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$dependencyChecker$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/dependencies/dependencyChecker.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$payloadPackageList$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/payloadPackageList.js [app-rsc] (ecmascript)");
;
;
function checkPayloadDependencies() {
    const dependencies = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$payloadPackageList$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PAYLOAD_PACKAGE_LIST"]
    ];
    if (process.env.PAYLOAD_CI_DEPENDENCY_CHECKER !== 'true') {
        dependencies.push('@payloadcms/plugin-sentry');
    }
    // First load. First check if there are mismatching dependency versions of payload packages
    void (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$dependencyChecker$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkDependencies"])({
        dependencyGroups: [
            {
                name: 'payload',
                dependencies,
                targetVersionDependency: 'payload'
            }
        ]
    });
} //# sourceMappingURL=checkPayloadDependencies.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/email/defaults.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "emailDefaults",
    ()=>emailDefaults
]);
const emailDefaults = {
    defaultFromAddress: 'info@payloadcms.com',
    defaultFromName: 'Payload'
}; //# sourceMappingURL=defaults.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/email/getStringifiedToAddress.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStringifiedToAddress",
    ()=>getStringifiedToAddress
]);
const getStringifiedToAddress = (message)=>{
    let stringifiedTo;
    if (typeof message.to === 'string') {
        stringifiedTo = message.to;
    } else if (Array.isArray(message.to)) {
        stringifiedTo = message.to.map((to)=>{
            if (typeof to === 'string') {
                return to;
            } else if (to.address) {
                return to.address;
            }
            return '';
        }).join(', ');
    } else if (message.to?.address) {
        stringifiedTo = message.to.address;
    }
    return stringifiedTo;
}; //# sourceMappingURL=getStringifiedToAddress.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/email/consoleEmailAdapter.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "consoleEmailAdapter",
    ()=>consoleEmailAdapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$email$2f$defaults$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/email/defaults.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$email$2f$getStringifiedToAddress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/email/getStringifiedToAddress.js [app-rsc] (ecmascript)");
;
;
const consoleEmailAdapter = ({ payload })=>({
        name: 'console',
        defaultFromAddress: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$email$2f$defaults$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["emailDefaults"].defaultFromAddress,
        defaultFromName: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$email$2f$defaults$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["emailDefaults"].defaultFromName,
        sendEmail: async (message)=>{
            const stringifiedTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$email$2f$getStringifiedToAddress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStringifiedToAddress"])(message);
            const res = `Email attempted without being configured. To: '${stringifiedTo}', Subject: '${message.subject}'`;
            payload.logger.info({
                msg: res
            });
            return Promise.resolve();
        }
    }); //# sourceMappingURL=consoleEmailAdapter.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BasePayload",
    ()=>BasePayload,
    "default",
    ()=>__TURBOPACK__default__export__,
    "getPayload",
    ()=>getPayload,
    "reload",
    ()=>reload
]);
/* eslint-disable @typescript-eslint/no-explicit-any */ var __TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/child_process [external] (child_process, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:url [external] (node:url, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$ws$2f$wrapper$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/ws/wrapper.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$local$2f$forgotPassword$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/auth/operations/local/forgotPassword.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$local$2f$login$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/auth/operations/local/login.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$local$2f$resetPassword$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/auth/operations/local/resetPassword.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$local$2f$unlock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/auth/operations/local/unlock.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$local$2f$verifyEmail$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/auth/operations/local/verifyEmail.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$count$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/collections/operations/local/count.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$create$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/collections/operations/local/create.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$delete$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/collections/operations/local/delete.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$duplicate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/collections/operations/local/duplicate.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$find$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/collections/operations/local/find.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$findByID$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/collections/operations/local/findByID.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$findDistinct$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/collections/operations/local/findDistinct.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$findVersionByID$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/collections/operations/local/findVersionByID.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$findVersions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/collections/operations/local/findVersions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$restoreVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/collections/operations/local/restoreVersion.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$update$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/collections/operations/local/update.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$countVersions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/local/countVersions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$findOne$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/local/findOne.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$findVersionByID$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/local/findVersionByID.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$findVersions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/local/findVersions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$restoreVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/local/restoreVersion.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$update$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/local/update.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$croner$2f$dist$2f$croner$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/croner/dist/croner.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$crypto$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/auth/crypto.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$local$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/auth/operations/local/auth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$strategies$2f$apiKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/auth/strategies/apiKey.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$strategies$2f$jwt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/auth/strategies/jwt.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/bin/generateImportMap/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$checkPayloadDependencies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/checkPayloadDependencies.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$countVersions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/collections/operations/local/countVersions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$email$2f$consoleEmailAdapter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/email/consoleEmailAdapter.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$localAPI$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/queues/localAPI.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getCurrentDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/queues/utilities/getCurrentDate.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatAdminURL$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/formatAdminURL.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNextBuild$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/isNextBuild.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$logger$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/logger.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$events$2f$serverInit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/telemetry/events/serverInit.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/traverseFields.js [app-rsc] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("Jaar4/automotive-framework/node_modules/payload/dist/index.js")}`;
    }
};
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const filename = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__["fileURLToPath"])(__TURBOPACK__import$2e$meta__.url);
const dirname = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(filename);
let checkedDependencies = false;
class BasePayload {
    /**
   * @description Authorization and Authentication using headers and cookies to run auth user strategies
   * @returns permissions: Permissions
   * @returns user: User
   */ auth = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$local$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["authLocal"])(this, options);
    };
    authStrategies;
    blocks = {};
    collections = {};
    config;
    /**
   * @description Performs count operation
   * @param options
   * @returns count of documents satisfying query
   */ count = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$count$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["countLocal"])(this, options);
    };
    /**
   * @description Performs countGlobalVersions operation
   * @param options
   * @returns count of global document versions satisfying query
   */ countGlobalVersions = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$countVersions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["countGlobalVersionsLocal"])(this, options);
    };
    /**
   * @description Performs countVersions operation
   * @param options
   * @returns count of document versions satisfying query
   */ countVersions = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$countVersions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["countVersionsLocal"])(this, options);
    };
    /**
   * @description Performs create operation
   * @param options
   * @returns created document
   */ create = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$create$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLocal"])(this, options);
    };
    crons = [];
    db;
    decrypt = __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$crypto$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decrypt"];
    destroy = async ()=>{
        if (this.crons.length) {
            // Remove all crons from the list before stopping them
            const cronsToStop = this.crons.splice(0, this.crons.length);
            await Promise.all(cronsToStop.map((cron)=>cron.stop()));
        }
        if (this.db?.destroy && typeof this.db.destroy === 'function') {
            await this.db.destroy();
        }
    };
    duplicate = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$duplicate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["duplicateLocal"])(this, options);
    };
    email;
    // TODO: re-implement or remove?
    // errorHandler: ErrorHandler
    encrypt = __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$crypto$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encrypt"];
    extensions;
    /**
   * @description Find documents with criteria
   * @param options
   * @returns documents satisfying query
   */ find = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$find$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findLocal"])(this, options);
    };
    /**
   * @description Find document by ID
   * @param options
   * @returns document with specified ID
   */ findByID = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$findByID$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findByIDLocal"])(this, options);
    };
    /**
   * @description Find distinct field values
   * @param options
   * @returns result with distinct field values
   */ findDistinct = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$findDistinct$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findDistinct"])(this, options);
    };
    findGlobal = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$findOne$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findOneGlobalLocal"])(this, options);
    };
    /**
   * @description Find global version by ID
   * @param options
   * @returns global version with specified ID
   */ findGlobalVersionByID = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$findVersionByID$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findGlobalVersionByIDLocal"])(this, options);
    };
    /**
   * @description Find global versions with criteria
   * @param options
   * @returns versions satisfying query
   */ findGlobalVersions = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$findVersions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findGlobalVersionsLocal"])(this, options);
    };
    /**
   * @description Find version by ID
   * @param options
   * @returns version with specified ID
   */ findVersionByID = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$findVersionByID$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findVersionByIDLocal"])(this, options);
    };
    /**
   * @description Find versions with criteria
   * @param options
   * @returns versions satisfying query
   */ findVersions = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$findVersions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findVersionsLocal"])(this, options);
    };
    forgotPassword = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$local$2f$forgotPassword$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forgotPasswordLocal"])(this, options);
    };
    getAdminURL = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatAdminURL$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatAdminURL"])({
            adminRoute: this.config.routes.admin,
            path: '',
            serverURL: this.config.serverURL
        });
    getAPIURL = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatAdminURL$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatAdminURL"])({
            apiRoute: this.config.routes.api,
            path: '',
            serverURL: this.config.serverURL
        });
    globals;
    importMap;
    jobs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$localAPI$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getJobsLocalAPI"])(this);
    /**
   * Key Value storage
   */ kv;
    logger;
    login = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$local$2f$login$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loginLocal"])(this, options);
    };
    resetPassword = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$local$2f$resetPassword$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resetPasswordLocal"])(this, options);
    };
    /**
   * @description Restore global version by ID
   * @param options
   * @returns version with specified ID
   */ restoreGlobalVersion = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$restoreVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["restoreGlobalVersionLocal"])(this, options);
    };
    /**
   * @description Restore version by ID
   * @param options
   * @returns version with specified ID
   */ restoreVersion = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$restoreVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["restoreVersionLocal"])(this, options);
    };
    schema;
    secret;
    sendEmail;
    types;
    unlock = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$local$2f$unlock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unlockLocal"])(this, options);
    };
    updateGlobal = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$update$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateGlobalLocal"])(this, options);
    };
    validationRules;
    verifyEmail = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$local$2f$verifyEmail$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyEmailLocal"])(this, options);
    };
    versions = {};
    async _initializeCrons() {
        if (this.config.jobs.enabled && this.config.jobs.autoRun && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNextBuild$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNextBuild"])()) {
            const DEFAULT_CRON = '* * * * *';
            const DEFAULT_LIMIT = 10;
            const cronJobs = typeof this.config.jobs.autoRun === 'function' ? await this.config.jobs.autoRun(this) : this.config.jobs.autoRun;
            await Promise.all(cronJobs.map((cronConfig)=>{
                const jobAutorunCron = new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$croner$2f$dist$2f$croner$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Cron"](cronConfig.cron ?? DEFAULT_CRON, async ()=>{
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getCurrentDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["_internal_jobSystemGlobals"].shouldAutoSchedule && !cronConfig.disableScheduling && this.config.jobs.scheduling) {
                        await this.jobs.handleSchedules({
                            allQueues: cronConfig.allQueues,
                            queue: cronConfig.queue
                        });
                    }
                    if (!__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getCurrentDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["_internal_jobSystemGlobals"].shouldAutoRun) {
                        return;
                    }
                    if (typeof this.config.jobs.shouldAutoRun === 'function') {
                        const shouldAutoRun = await this.config.jobs.shouldAutoRun(this);
                        if (!shouldAutoRun) {
                            jobAutorunCron.stop();
                            return;
                        }
                    }
                    await this.jobs.run({
                        allQueues: cronConfig.allQueues,
                        limit: cronConfig.limit ?? DEFAULT_LIMIT,
                        queue: cronConfig.queue,
                        silent: cronConfig.silent
                    });
                }, {
                    // Do not run consecutive crons if previous crons still ongoing
                    protect: true
                });
                this.crons.push(jobAutorunCron);
            }));
        }
    }
    async bin({ args, cwd, log }) {
        return new Promise((resolve, reject)=>{
            const spawned = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__["spawn"])('node', [
                __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(dirname, '../bin.js'),
                ...args
            ], {
                cwd,
                stdio: log || log === undefined ? 'inherit' : 'ignore'
            });
            spawned.on('exit', (code)=>{
                resolve({
                    code: code
                });
            });
            spawned.on('error', (error)=>{
                reject(error);
            });
        });
    }
    delete(options) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$delete$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteLocal"])(this, options);
    }
    /**
   * @description Initializes Payload
   * @param options
   */ async init(options) {
        if (("TURBOPACK compile-time value", "development") !== 'production' && process.env.PAYLOAD_DISABLE_DEPENDENCY_CHECKER !== 'true' && !checkedDependencies) {
            checkedDependencies = true;
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$checkPayloadDependencies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkPayloadDependencies"])();
        }
        this.importMap = options.importMap;
        if (!options?.config) {
            throw new Error('Error: the payload config is required to initialize payload.');
        }
        this.config = await options.config;
        this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$logger$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLogger"])('payload', this.config.logger);
        if (!this.config.secret) {
            throw new Error('Error: missing secret key. A secret key is needed to secure Payload.');
        }
        this.secret = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash('sha256').update(this.config.secret).digest('hex').slice(0, 32);
        this.globals = {
            config: this.config.globals
        };
        for (const collection of this.config.collections){
            let customIDType = undefined;
            const findCustomID = ({ field })=>{
                if ([
                    'array',
                    'blocks',
                    'group'
                ].includes(field.type) || field.type === 'tab' && 'name' in field) {
                    return true;
                }
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
                    return;
                }
                if (field.name === 'id') {
                    customIDType = field.type;
                    return true;
                }
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                callback: findCustomID,
                config: this.config,
                fields: collection.fields,
                parentIsLocalized: false
            });
            this.collections[collection.slug] = {
                config: collection,
                customIDType
            };
        }
        this.blocks = this.config.blocks.reduce((blocks, block)=>{
            blocks[block.slug] = block;
            return blocks;
        }, {});
        // Generate types on startup
        if (("TURBOPACK compile-time value", "development") !== 'production' && this.config.typescript.autoGenerate !== false) {
            // We cannot run it directly here, as generate-types imports json-schema-to-typescript, which breaks on turbopack.
            // see: https://github.com/vercel/next.js/issues/66723
            void this.bin({
                args: [
                    'generate:types'
                ],
                log: false
            });
        }
        this.db = this.config.db.init({
            payload: this
        });
        this.db.payload = this;
        this.kv = this.config.kv.init({
            payload: this
        });
        if (this.db?.init) {
            await this.db.init();
        }
        if (!options.disableDBConnect && this.db.connect) {
            await this.db.connect();
        }
        // Load email adapter
        if (this.config.email instanceof Promise) {
            const awaitedAdapter = await this.config.email;
            this.email = awaitedAdapter({
                payload: this
            });
        } else if (this.config.email) {
            this.email = this.config.email({
                payload: this
            });
        } else {
            if (process.env.NEXT_PHASE !== 'phase-production-build') {
                this.logger.warn(`No email adapter provided. Email will be written to console. More info at https://payloadcms.com/docs/email/overview.`);
            }
            this.email = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$email$2f$consoleEmailAdapter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["consoleEmailAdapter"])({
                payload: this
            });
        }
        // Warn if image resizing is enabled but sharp is not installed
        if (!this.config.sharp && this.config.collections.some((c)=>c.upload.imageSizes || c.upload.formatOptions)) {
            this.logger.warn(`Image resizing is enabled for one or more collections, but sharp not installed. Please install 'sharp' and pass into the config.`);
        }
        // Warn if user is deploying to Vercel, and any upload collection is missing a storage adapter
        if (process.env.VERCEL) {
            const uploadCollWithoutAdapter = this.config.collections.filter((c)=>c.upload && c.upload.adapter === undefined);
            if (uploadCollWithoutAdapter.length) {
                const slugs = uploadCollWithoutAdapter.map((c)=>c.slug).join(', ');
                this.logger.warn(`Collections with uploads enabled require a storage adapter when deploying to Vercel. Collection(s) without storage adapters: ${slugs}. See https://payloadcms.com/docs/upload/storage-adapters for more info.`);
            }
        }
        this.sendEmail = this.email['sendEmail'];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$events$2f$serverInit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serverInit"])(this);
        // 1. loop over collections, if collection has auth strategy, initialize and push to array
        let jwtStrategyEnabled = false;
        this.authStrategies = this.config.collections.reduce((authStrategies, collection)=>{
            if (collection?.auth) {
                if (collection.auth.strategies.length > 0) {
                    authStrategies.push(...collection.auth.strategies);
                }
                // 2. if api key enabled, push api key strategy into the array
                if (collection.auth?.useAPIKey) {
                    authStrategies.push({
                        name: `${collection.slug}-api-key`,
                        authenticate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$strategies$2f$apiKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIKeyAuthentication"])(collection)
                    });
                }
                // 3. if localStrategy flag is true
                if (!collection.auth.disableLocalStrategy && !jwtStrategyEnabled) {
                    jwtStrategyEnabled = true;
                }
            }
            return authStrategies;
        }, []);
        // 4. if enabled, push jwt strategy into authStrategies last
        if (jwtStrategyEnabled) {
            this.authStrategies.push({
                name: 'local-jwt',
                authenticate: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$strategies$2f$jwt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWTAuthentication"]
            });
        }
        try {
            if (!options.disableOnInit) {
                if (typeof options.onInit === 'function') {
                    await options.onInit(this);
                }
                if (typeof this.config.onInit === 'function') {
                    await this.config.onInit(this);
                }
            }
        } catch (error) {
            this.logger.error({
                err: error
            }, 'Error running onInit function');
            throw error;
        }
        if (options.cron) {
            await this._initializeCrons();
        }
        return this;
    }
    update(options) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$update$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateLocal"])(this, options);
    }
}
const initialized = new BasePayload();
const __TURBOPACK__default__export__ = initialized;
const reload = async (config, payload, skipImportMapGeneration, options)=>{
    if (typeof payload.db.destroy === 'function') {
        // Only destroy db, as we then later only call payload.db.init and not payload.init
        await payload.db.destroy();
    }
    payload.config = config;
    payload.collections = config.collections.reduce((collections, collection)=>{
        collections[collection.slug] = {
            config: collection,
            customIDType: payload.collections[collection.slug]?.customIDType
        };
        return collections;
    }, {});
    payload.blocks = config.blocks.reduce((blocks, block)=>{
        blocks[block.slug] = block;
        return blocks;
    }, {});
    payload.globals = {
        config: config.globals
    };
    // TODO: support HMR for other props in the future (see payload/src/index init()) that may change on Payload singleton
    // Generate types
    if (config.typescript.autoGenerate !== false) {
        // We cannot run it directly here, as generate-types imports json-schema-to-typescript, which breaks on turbopack.
        // see: https://github.com/vercel/next.js/issues/66723
        void payload.bin({
            args: [
                'generate:types'
            ],
            log: false
        });
    }
    // Generate import map
    if (skipImportMapGeneration !== true && config.admin?.importMap?.autoGenerate !== false) {
        // This may run outside of the admin panel, e.g. in the user's frontend, where we don't have an import map file.
        // We don't want to throw an error in this case, as it would break the user's frontend.
        // => just skip it => ignoreResolveError: true
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateImportMap"])(config, {
            ignoreResolveError: true,
            log: true
        });
    }
    if (payload.db?.init) {
        await payload.db.init();
    }
    if (!options?.disableDBConnect && payload.db.connect) {
        await payload.db.connect({
            hotReload: true
        });
    }
    ;
    /*TURBOPACK member replacement*/ __turbopack_context__.g._payload_clientConfigs = {};
    /*TURBOPACK member replacement*/ __turbopack_context__.g._payload_schemaMap = null;
    /*TURBOPACK member replacement*/ __turbopack_context__.g._payload_clientSchemaMap = null;
    /*TURBOPACK member replacement*/ __turbopack_context__.g._payload_doNotCacheClientConfig = true // This will help refreshing the client config cache more reliably. If you remove this, please test HMR + client config refreshing (do new fields appear in the document?)
    ;
    /*TURBOPACK member replacement*/ __turbopack_context__.g._payload_doNotCacheSchemaMap = true;
    /*TURBOPACK member replacement*/ __turbopack_context__.g._payload_doNotCacheClientSchemaMap = true;
};
let _cached = /*TURBOPACK member replacement*/ __turbopack_context__.g._payload;
if (!_cached) {
    _cached = /*TURBOPACK member replacement*/ __turbopack_context__.g._payload = new Map();
}
const getPayload = async (options)=>{
    if (!options?.config) {
        throw new Error('Error: the payload config is required for getPayload to work.');
    }
    let alreadyCachedSameConfig = false;
    let cached = _cached.get(options.key ?? 'default');
    if (!cached) {
        cached = {
            initializedCrons: Boolean(options.cron),
            payload: null,
            promise: null,
            reload: false,
            ws: null
        };
        _cached.set(options.key ?? 'default', cached);
    } else {
        alreadyCachedSameConfig = true;
    }
    if (alreadyCachedSameConfig) {
        // alreadyCachedSameConfig => already called onInit once, but same config => no need to call onInit again.
        // calling onInit again would only make sense if a different config was passed.
        options.disableOnInit = true;
    }
    if (cached.payload) {
        if (options.cron && !cached.initializedCrons) {
            // getPayload called with crons enabled, but existing cached version does not have crons initialized. => Initialize crons in existing cached version
            cached.initializedCrons = true;
            await cached.payload._initializeCrons();
        }
        if (cached.reload === true) {
            let resolve;
            // getPayload is called multiple times, in parallel. However, we only want to run `await reload` once. By immediately setting cached.reload to a promise,
            // we can ensure that all subsequent calls will wait for the first reload to finish. So if we set it here, the 2nd call of getPayload
            // will reach `if (cached.reload instanceof Promise) {` which then waits for the first reload to finish.
            cached.reload = new Promise((res)=>resolve = res);
            const config = await options.config;
            // Reload the payload instance after a config change (triggered by HMR in development).
            // The second parameter (false) forces import map regeneration rather than deciding based on options.importMap.
            //
            // Why we always regenerate import map: getPayload() may be called from multiple sources (admin panel, frontend, etc.)
            // that share the same cache but may pass different importMap values. Since call order is unpredictable,
            // we cannot rely on options.importMap to determine if regeneration is needed.
            //
            // Example scenario: If the frontend calls getPayload() without importMap first, followed by the admin
            // panel calling it with importMap, we'd incorrectly skip generation for the admin panel's needs.
            // By always regenerating on reload, we ensure the import map stays in sync with the updated config.
            await reload(config, cached.payload, false, options);
            resolve();
            cached.reload = false;
        }
        if (cached.reload instanceof Promise) {
            await cached.reload;
        }
        if (options?.importMap) {
            cached.payload.importMap = options.importMap;
        }
        return cached.payload;
    }
    try {
        if (!cached.promise) {
            // no need to await options.config here, as it's already awaited in the BasePayload.init
            cached.promise = new BasePayload().init(options);
        }
        cached.payload = await cached.promise;
        if (!cached.ws && ("TURBOPACK compile-time value", "development") !== 'production' && ("TURBOPACK compile-time value", "development") !== 'test' && process.env.DISABLE_PAYLOAD_HMR !== 'true') {
            try {
                const port = process.env.PORT || '3000';
                const hasHTTPS = process.env.USE_HTTPS === 'true' || process.argv.includes('--experimental-https');
                const protocol = hasHTTPS ? 'wss' : 'ws';
                const path = '/_next/webpack-hmr';
                // The __NEXT_ASSET_PREFIX env variable is set for both assetPrefix and basePath (tested in Next.js 15.1.6)
                const prefix = ("TURBOPACK compile-time value", "") ?? '';
                cached.ws = new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$ws$2f$wrapper$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"](process.env.PAYLOAD_HMR_URL_OVERRIDE ?? `${protocol}://localhost:${port}${prefix}${path}`);
                cached.ws.onmessage = (event)=>{
                    if (cached.reload instanceof Promise) {
                        // If there is an in-progress reload in the same getPayload
                        // cache instance, do not set reload to true again, which would
                        // trigger another reload.
                        // Instead, wait for the in-progress reload to finish.
                        return;
                    }
                    if (typeof event.data === 'string') {
                        const data = JSON.parse(event.data);
                        if (data.type === 'serverComponentChanges' || data.action === 'serverComponentChanges') {
                            cached.reload = true;
                        }
                    }
                };
                cached.ws.onerror = (_)=>{
                // swallow any websocket connection error
                };
            } catch (_) {
            // swallow e
            }
        }
    } catch (e) {
        cached.promise = null;
        e.payloadInitError = true;
        throw e;
    }
    if (options?.importMap) {
        cached.payload.importMap = options.importMap;
    }
    return cached.payload;
};
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/config/find.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findConfig",
    ()=>findConfig,
    "payloadConfigFileNames",
    ()=>payloadConfigFileNames
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$node_modules$2f$get$2d$tsconfig$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/node_modules/get-tsconfig/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$findUp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/findUp.js [app-rsc] (ecmascript)");
;
;
;
const payloadConfigFileNames = [
    'payload.config.js',
    'payload.config.ts'
];
/**
 * Returns the source and output paths from the nearest tsconfig.json file.
 * If no tsconfig.json file is found, returns the current working directory.
 * @returns An object containing the source and output paths.
 */ const getTSConfigPaths = ()=>{
    const tsConfigResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$node_modules$2f$get$2d$tsconfig$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTsconfig"])();
    const tsConfig = tsConfigResult.config;
    const tsConfigDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(tsConfigResult.path);
    try {
        const rootConfigDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(tsConfigDir, tsConfig.compilerOptions.baseUrl || '');
        const srcPath = tsConfig.compilerOptions?.rootDir || __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(process.cwd(), 'src');
        const outPath = tsConfig.compilerOptions?.outDir || __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(process.cwd(), 'dist');
        let configPath = tsConfig.compilerOptions?.paths?.['@payload-config']?.[0];
        if (configPath) {
            configPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(rootConfigDir, configPath);
        }
        return {
            configPath,
            outPath,
            rootPath: rootConfigDir,
            srcPath,
            tsConfigPath: tsConfigResult.path
        };
    } catch (error) {
        console.error(`Error parsing tsconfig.json: ${error}`); // Do not throw the error, as we can still continue with the other config path finding methods
        return {
            rootPath: process.cwd()
        };
    }
};
const findConfig = ()=>{
    // If the developer has specified a config path,
    // format it if relative and use it directly if absolute
    if (process.env.PAYLOAD_CONFIG_PATH) {
        if (__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].isAbsolute(process.env.PAYLOAD_CONFIG_PATH)) {
            return process.env.PAYLOAD_CONFIG_PATH;
        }
        return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(process.cwd(), process.env.PAYLOAD_CONFIG_PATH);
    }
    const { configPath, outPath, rootPath, srcPath } = getTSConfigPaths();
    // if configPath is absolute file, not folder, return it
    if (configPath && (__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].extname(configPath) === '.js' || __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].extname(configPath) === '.ts')) {
        return configPath;
    }
    const searchPaths = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : [
        configPath,
        srcPath,
        rootPath
    ];
    for (const searchPath of searchPaths){
        if (!searchPath) {
            continue;
        }
        const configPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$findUp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findUpSync"])({
            dir: searchPath,
            fileNames: payloadConfigFileNames
        });
        if (configPath) {
            return configPath;
        }
    }
    // If no config file is found in the directories defined by tsconfig.json,
    // try searching in the 'src' and 'dist' directory as a last resort, as they are most commonly used
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        const srcConfigPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$findUp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findUpSync"])({
            dir: __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(process.cwd(), 'src'),
            fileNames: payloadConfigFileNames
        });
        if (srcConfigPath) {
            return srcConfigPath;
        }
    }
    throw new Error('Error: cannot find Payload config. Please create a configuration file located at the root of your current working directory called "payload.config.js" or "payload.config.ts".');
}; //# sourceMappingURL=find.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/config/defaults.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addDefaultsToConfig",
    ()=>addDefaultsToConfig,
    "defaults",
    ()=>defaults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/auth/defaultAccess.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$folders$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/folders/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$kv$2f$adapters$2f$DatabaseKVAdapter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/kv/adapters/DatabaseKVAdapter.js [app-rsc] (ecmascript)");
;
;
;
const defaults = {
    admin: {
        avatar: 'gravatar',
        components: {},
        custom: {},
        dateFormat: 'MMMM do yyyy, h:mm a',
        dependencies: {},
        importMap: {
            baseDir: `${typeof process?.cwd === 'function' ? process.cwd() : ''}`
        },
        meta: {
            defaultOGImageType: 'dynamic',
            robots: 'noindex, nofollow',
            titleSuffix: '- Payload'
        },
        routes: {
            account: '/account',
            browseByFolder: '/browse-by-folder',
            createFirstUser: '/create-first-user',
            forgot: '/forgot',
            inactivity: '/logout-inactivity',
            login: '/login',
            logout: '/logout',
            reset: '/reset',
            unauthorized: '/unauthorized'
        },
        theme: 'all'
    },
    auth: {
        jwtOrder: [
            'JWT',
            'Bearer',
            'cookie'
        ]
    },
    bin: [],
    collections: [],
    cookiePrefix: 'payload',
    cors: [],
    csrf: [],
    custom: {},
    defaultDepth: 2,
    defaultMaxTextLength: 40000,
    endpoints: [],
    globals: [],
    graphQL: {
        disablePlaygroundInProduction: true,
        maxComplexity: 1000,
        schemaOutputFile: `${typeof process?.cwd === 'function' ? process.cwd() : ''}/schema.graphql`
    },
    hooks: {},
    i18n: {},
    jobs: {
        access: {
            cancel: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultAccess"],
            queue: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultAccess"],
            run: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultAccess"]
        },
        deleteJobOnComplete: true,
        depth: 0
    },
    localization: false,
    maxDepth: 10,
    routes: {
        admin: '/admin',
        api: '/api',
        graphQL: '/graphql',
        graphQLPlayground: '/graphql-playground'
    },
    serverURL: '',
    telemetry: true,
    typescript: {
        autoGenerate: true,
        outputFile: `${typeof process?.cwd === 'function' ? process.cwd() : ''}/payload-types.ts`
    },
    upload: {}
};
const addDefaultsToConfig = (config)=>{
    config.admin = {
        avatar: 'gravatar',
        components: {},
        custom: {},
        dateFormat: 'MMMM do yyyy, h:mm a',
        dependencies: {},
        theme: 'all',
        ...config.admin || {},
        importMap: {
            baseDir: `${typeof process?.cwd === 'function' ? process.cwd() : ''}`,
            ...config?.admin?.importMap || {}
        },
        meta: {
            defaultOGImageType: 'dynamic',
            robots: 'noindex, nofollow',
            titleSuffix: '- Payload',
            ...config?.admin?.meta || {}
        },
        routes: {
            account: '/account',
            browseByFolder: '/browse-by-folder',
            createFirstUser: '/create-first-user',
            forgot: '/forgot',
            inactivity: '/logout-inactivity',
            login: '/login',
            logout: '/logout',
            reset: '/reset',
            unauthorized: '/unauthorized',
            ...config?.admin?.routes || {}
        }
    };
    config.bin = config.bin ?? [];
    config.collections = config.collections ?? [];
    config.cookiePrefix = config.cookiePrefix ?? 'payload';
    config.cors = config.cors ?? [];
    config.csrf = config.csrf ?? [];
    config.custom = config.custom ?? {};
    config.defaultDepth = config.defaultDepth ?? 2;
    config.defaultMaxTextLength = config.defaultMaxTextLength ?? 40000;
    config.endpoints = config.endpoints ?? [];
    config.globals = config.globals ?? [];
    config.graphQL = {
        disableIntrospectionInProduction: true,
        disablePlaygroundInProduction: true,
        maxComplexity: 1000,
        schemaOutputFile: `${typeof process?.cwd === 'function' ? process.cwd() : ''}/schema.graphql`,
        ...config.graphQL || {}
    };
    config.hooks = config.hooks ?? {};
    config.i18n = config.i18n ?? {};
    config.jobs = {
        deleteJobOnComplete: true,
        depth: 0,
        ...config.jobs || {},
        access: {
            cancel: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultAccess"],
            queue: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultAccess"],
            run: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultAccess"],
            ...config.jobs?.access || {}
        }
    };
    config.localization = config.localization ?? false;
    config.maxDepth = config.maxDepth ?? 10;
    config.routes = {
        admin: '/admin',
        api: '/api',
        graphQL: '/graphql',
        graphQLPlayground: '/graphql-playground',
        ...config.routes || {}
    };
    config.serverURL = config.serverURL ?? '';
    config.telemetry = config.telemetry ?? true;
    config.typescript = {
        autoGenerate: true,
        outputFile: `${typeof process?.cwd === 'function' ? process.cwd() : ''}/payload-types.ts`,
        ...config.typescript || {}
    };
    config.upload = config.upload ?? {};
    config.auth = {
        jwtOrder: [
            'JWT',
            'Bearer',
            'cookie'
        ],
        ...config.auth || {}
    };
    config.kv = config.kv ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$kv$2f$adapters$2f$DatabaseKVAdapter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["databaseKVAdapter"])();
    if (config.kv?.kvCollection) {
        config.collections.push(config.kv.kvCollection);
    }
    if (config.folders !== false && config.collections.some((collection)=>Boolean(collection.folders))) {
        config.folders = {
            slug: config.folders?.slug ?? __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$folders$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["foldersSlug"],
            browseByFolder: config.folders?.browseByFolder ?? true,
            collectionOverrides: config.folders?.collectionOverrides || undefined,
            collectionSpecific: config.folders?.collectionSpecific ?? true,
            debug: config.folders?.debug ?? false,
            fieldName: config.folders?.fieldName ?? __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$folders$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parentFolderFieldName"]
        };
    } else {
        config.folders = false;
    }
    return config;
}; //# sourceMappingURL=defaults.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/config/orderable/fractional-indexing.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// @ts-no-check
/**
 * THIS FILE IS BASED ON:
 * https://github.com/rocicorp/fractional-indexing/blob/main/src/index.js
 *
 * MODIFIED FOR PAYLOAD CMS:
 * - Changed the integer part encoding to use only digits for "small" keys and
 *   only lowercase letters for "large" keys, ensuring consistent ordering
 *   across databases with different collations.
 *
 * - Original algorithm used A-Z (uppercase) for "smaller" integers and a-z (lowercase)
 *   for "larger" integers, relying on ASCII ordering where 'Z' < 'a'.
 *
 * - Some databases (e.g., PostgreSQL with default collation) use case-insensitive
 *   comparison, treating 'Z' as 'z', which breaks the ordering.
 *
 * - New encoding:
 *   - Uses digits '0'-'9' for "small" integers (10 values, lengths 11 down to 2)
 *   - Uses lowercase 'a'-'z' for "large" integers (26 values, lengths 2 up to 27)
 *   - Digits ALWAYS sort before letters in both ASCII and case-insensitive orderings.
 *
 * - Ordering: '0...' < '1...' < ... < '9..' < 'a.' < 'b..' < ... < 'z...'
 *
 * BACKWARD COMPATIBILITY:
 * - Existing keys starting with lowercase 'a'-'z' remain valid and work correctly.
 * - Keys starting with uppercase 'A'-'Z' (from the old algorithm) will still be
 *   parsed for backward compatibility, but they may sort incorrectly in
 *   case-insensitive databases. Consider running a migration to convert them.
 */ // License: CC0 (no rights reserved).
// This is based on https://observablehq.com/@dgreensp/implementing-fractional-indexing
__turbopack_context__.s([
    "BASE_36_DIGITS",
    ()=>BASE_36_DIGITS,
    "generateKeyBetween",
    ()=>generateKeyBetween,
    "generateNKeysBetween",
    ()=>generateNKeysBetween
]);
const BASE_36_DIGITS = '0123456789abcdefghijklmnopqrstuvwxyz';
// `a` may be empty string, `b` is null or non-empty string.
// `a < b` lexicographically if `b` is non-null.
// no trailing zeros allowed.
// digits is a string such as '0123456789' for base 10.  Digits must be in
// ascending character code order!
/**
 * @param {string} a
 * @param {string | null | undefined} b
 * @param {string} digits
 * @returns {string}
 */ function midpoint(a, b, digits) {
    const zero = digits[0];
    if (b != null && a >= b) {
        throw new Error(a + ' >= ' + b);
    }
    if (a.slice(-1) === zero || b && b.slice(-1) === zero) {
        throw new Error('trailing zero');
    }
    if (b) {
        // remove longest common prefix.  pad `a` with 0s as we
        // go.  note that we don't need to pad `b`, because it can't
        // end before `a` while traversing the common prefix.
        let n = 0;
        while((a[n] || zero) === b[n]){
            n++;
        }
        if (n > 0) {
            return b.slice(0, n) + midpoint(a.slice(n), b.slice(n), digits);
        }
    }
    // first digits (or lack of digit) are different
    const digitA = a ? digits.indexOf(a[0]) : 0;
    const digitB = b != null ? digits.indexOf(b[0]) : digits.length;
    if (digitB - digitA > 1) {
        const midDigit = Math.round(0.5 * (digitA + digitB));
        return digits[midDigit];
    } else {
        // first digits are consecutive
        if (b && b.length > 1) {
            return b.slice(0, 1);
        } else {
            // `b` is null or has length 1 (a single digit).
            // the first digit of `a` is the previous digit to `b`,
            // or 9 if `b` is null.
            // given, for example, midpoint('49', '5'), return
            // '4' + midpoint('9', null), which will become
            // '4' + '9' + midpoint('', null), which is '495'
            return digits[digitA] + midpoint(a.slice(1), null, digits);
        }
    }
}
/**
 * @param {string} int
 * @return {void}
 */ function validateInteger(int) {
    if (int.length !== getIntegerLength(int[0])) {
        throw new Error('invalid integer part of order key: ' + int);
    }
}
/**
 * Returns the length of the integer part based on the head character.
 *
 * New encoding (case-insensitive safe):
 * - SMALL range (digits): '0' = 11 chars, '1' = 10 chars, ..., '9' = 2 chars
 * - LARGE range (lowercase): 'a' = 2 chars, 'b' = 3 chars, ..., 'z' = 27 chars
 *
 * Legacy encoding (for backward compatibility with existing keys):
 * - 'A'-'Z' uppercase: 'A' = 27 chars, 'B' = 26 chars, ..., 'Z' = 2 chars
 *
 * @param {string} head
 * @return {number}
 */ function getIntegerLength(head) {
    if (head >= '0' && head <= '9') {
        return 11 - (head.charCodeAt(0) - '0'.charCodeAt(0));
    } else if (head >= 'a' && head <= 'z') {
        return head.charCodeAt(0) - 'a'.charCodeAt(0) + 2;
    } else if (head >= 'A' && head <= 'Z') {
        // Legacy encoding
        return 'Z'.charCodeAt(0) - head.charCodeAt(0) + 2;
    } else {
        throw new Error('invalid order key head: ' + head);
    }
}
/**
 * @param {string} key
 * @return {string}
 */ function getIntegerPart(key) {
    const integerPartLength = getIntegerLength(key[0]);
    if (integerPartLength > key.length) {
        throw new Error('invalid order key: ' + key);
    }
    return key.slice(0, integerPartLength);
}
/**
 * Smallest possible key (for validation)
 * '0' + 10 zeros = smallest valid key in new format
 */ const SMALLEST_KEY = '0' + BASE_36_DIGITS[0].repeat(10);
/**
 * @param {string} key
 * @param {string} digits
 * @return {void}
 */ function validateOrderKey(key, digits) {
    if (key === SMALLEST_KEY) {
        throw new Error('invalid order key: ' + key);
    }
    // Legacy check for old format
    if (key === 'A' + digits[0].repeat(26)) {
        throw new Error('invalid order key: ' + key);
    }
    // getIntegerPart will throw if the first character is bad,
    // or the key is too short.  we'd call it to check these things
    // even if we didn't need the result
    const i = getIntegerPart(key);
    const f = key.slice(i.length);
    if (f.slice(-1) === digits[0]) {
        throw new Error('invalid order key: ' + key);
    }
}
// note that this may return null, as there is a largest integer
/**
 * @param {string} x
 * @param {string} digits
 * @return {string | null}
 */ function incrementInteger(x, digits) {
    validateInteger(x);
    const [head, ...digs] = x.split('');
    let carry = true;
    for(let i = digs.length - 1; carry && i >= 0; i--){
        const d = digits.indexOf(digs[i]) + 1;
        if (d === digits.length) {
            digs[i] = digits[0];
        } else {
            digs[i] = digits[d];
            carry = false;
        }
    }
    if (carry) {
        if (head === '9') {
            return 'a' + digits[0];
        }
        // Handle legacy uppercase transition
        if (head === 'Z') {
            return 'a' + digits[0];
        }
        if (head === 'z') {
            return null;
        }
        let h;
        if (head >= '0' && head <= '8') {
            h = String.fromCharCode(head.charCodeAt(0) + 1);
            digs.pop();
        } else if (head >= 'a' && head <= 'y') {
            h = String.fromCharCode(head.charCodeAt(0) + 1);
            digs.push(digits[0]);
        } else if (head >= 'A' && head <= 'Y') {
            // Legacy uppercase
            h = String.fromCharCode(head.charCodeAt(0) + 1);
            digs.pop();
        } else {
            throw new Error('invalid head: ' + head);
        }
        return h + digs.join('');
    } else {
        return head + digs.join('');
    }
}
// note that this may return null, as there is a smallest integer
/**
 * @param {string} x
 * @param {string} digits
 * @return {string | null}
 */ function decrementInteger(x, digits) {
    validateInteger(x);
    const [head, ...digs] = x.split('');
    let borrow = true;
    for(let i = digs.length - 1; borrow && i >= 0; i--){
        const d = digits.indexOf(digs[i]) - 1;
        if (d === -1) {
            digs[i] = digits.slice(-1);
        } else {
            digs[i] = digits[d];
            borrow = false;
        }
    }
    if (borrow) {
        if (head === 'a') {
            return '9' + digits.slice(-1);
        }
        if (head === '0') {
            return null;
        }
        let h;
        if (head >= '1' && head <= '9') {
            h = String.fromCharCode(head.charCodeAt(0) - 1);
            digs.push(digits.slice(-1));
        } else if (head >= 'b' && head <= 'z') {
            h = String.fromCharCode(head.charCodeAt(0) - 1);
            digs.pop();
        } else if (head >= 'B' && head <= 'Z') {
            // Legacy uppercase
            h = String.fromCharCode(head.charCodeAt(0) - 1);
            digs.push(digits.slice(-1));
        } else if (head === 'A') {
            // Legacy uppercase
            return null;
        } else {
            throw new Error('invalid head: ' + head);
        }
        return h + digs.join('');
    } else {
        return head + digs.join('');
    }
}
function generateKeyBetween(a, b, digits = BASE_36_DIGITS) {
    if (a != null) {
        validateOrderKey(a, digits);
    }
    if (b != null) {
        validateOrderKey(b, digits);
    }
    if (a != null && b != null && a >= b) {
        throw new Error(a + ' >= ' + b);
    }
    if (a == null) {
        if (b == null) {
            return 'a' + digits[0];
        }
        const ib = getIntegerPart(b);
        const fb = b.slice(ib.length);
        if (ib === SMALLEST_KEY) {
            return ib + midpoint('', fb, digits);
        }
        // Legacy check
        if (ib === 'A' + digits[0].repeat(26)) {
            return ib + midpoint('', fb, digits);
        }
        if (ib < b) {
            return ib;
        }
        const res = decrementInteger(ib, digits);
        if (res == null) {
            throw new Error('cannot decrement any more');
        }
        return res;
    }
    if (b == null) {
        const ia = getIntegerPart(a);
        const fa = a.slice(ia.length);
        const i = incrementInteger(ia, digits);
        return i == null ? ia + midpoint(fa, null, digits) : i;
    }
    const ia = getIntegerPart(a);
    const fa = a.slice(ia.length);
    const ib = getIntegerPart(b);
    const fb = b.slice(ib.length);
    if (ia === ib) {
        return ia + midpoint(fa, fb, digits);
    }
    const i = incrementInteger(ia, digits);
    if (i == null) {
        throw new Error('cannot increment any more');
    }
    if (i < b) {
        return i;
    }
    return ia + midpoint(fa, null, digits);
}
function generateNKeysBetween(a, b, n, digits = BASE_36_DIGITS) {
    if (n === 0) {
        return [];
    }
    if (n === 1) {
        return [
            generateKeyBetween(a, b, digits)
        ];
    }
    if (b == null) {
        let c = generateKeyBetween(a, b, digits);
        const result = [
            c
        ];
        for(let i = 0; i < n - 1; i++){
            c = generateKeyBetween(c, b, digits);
            result.push(c);
        }
        return result;
    }
    if (a == null) {
        let c = generateKeyBetween(a, b, digits);
        const result = [
            c
        ];
        for(let i = 0; i < n - 1; i++){
            c = generateKeyBetween(a, c, digits);
            result.push(c);
        }
        result.reverse();
        return result;
    }
    const mid = Math.floor(n / 2);
    const c = generateKeyBetween(a, b, digits);
    return [
        ...generateNKeysBetween(a, c, mid, digits),
        c,
        ...generateNKeysBetween(c, b, n - mid - 1, digits)
    ];
} //# sourceMappingURL=fractional-indexing.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/config/orderable/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addOrderableEndpoint",
    ()=>addOrderableEndpoint,
    "addOrderableFieldsAndHook",
    ()=>addOrderableFieldsAndHook,
    "setupOrderable",
    ()=>setupOrderable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-rsc] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/auth/executeAccess.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/commitTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/initTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/killTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/traverseFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$config$2f$orderable$2f$fractional$2d$indexing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/config/orderable/fractional-indexing.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const setupOrderable = (config)=>{
    const fieldsToAdd = new Map();
    config.collections.forEach((collection)=>{
        if (collection.orderable) {
            const currentFields = fieldsToAdd.get(collection) || [];
            fieldsToAdd.set(collection, [
                ...currentFields,
                '_order'
            ]);
            collection.defaultSort = collection.defaultSort ?? '_order';
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
            callback: ({ field, parentRef, ref })=>{
                if (field.type === 'array' || field.type === 'blocks') {
                    return false;
                }
                if (field.type === 'group' || field.type === 'tab') {
                    // @ts-expect-error ref is untyped
                    const parentPrefix = parentRef?.prefix ? `${parentRef.prefix}_` : '';
                    // @ts-expect-error ref is untyped
                    ref.prefix = `${parentPrefix}${field.name}`;
                }
                if (field.type === 'join' && field.orderable === true) {
                    if (Array.isArray(field.collection)) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]('Orderable joins must target a single collection', __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].BAD_REQUEST, {}, true);
                    }
                    const relationshipCollection = config.collections.find((c)=>c.slug === field.collection);
                    if (!relationshipCollection) {
                        return false;
                    }
                    field.defaultSort = field.defaultSort ?? `_${field.collection}_${field.name}_order`;
                    const currentFields = fieldsToAdd.get(relationshipCollection) || [];
                    // @ts-expect-error ref is untyped
                    const prefix = parentRef?.prefix ? `${parentRef.prefix}_` : '';
                    fieldsToAdd.set(relationshipCollection, [
                        ...currentFields,
                        `_${field.collection}_${prefix}${field.name}_order`
                    ]);
                }
            },
            fields: collection.fields
        });
    });
    Array.from(fieldsToAdd.entries()).forEach(([collection, orderableFields])=>{
        addOrderableFieldsAndHook(collection, orderableFields);
    });
    if (fieldsToAdd.size > 0) {
        addOrderableEndpoint(config);
    }
};
const addOrderableFieldsAndHook = (collection, orderableFieldNames)=>{
    // 1. Add field
    orderableFieldNames.forEach((orderableFieldName)=>{
        const orderField = {
            name: orderableFieldName,
            type: 'text',
            admin: {
                disableBulkEdit: true,
                disabled: true,
                disableGroupBy: true,
                disableListColumn: true,
                disableListFilter: true,
                hidden: true,
                readOnly: true
            },
            hooks: {
                beforeDuplicate: [
                    ({ siblingData })=>{
                        delete siblingData[orderableFieldName];
                    }
                ]
            },
            index: true
        };
        collection.fields.unshift(orderField);
    });
    // 2. Add hook
    if (!collection.hooks) {
        collection.hooks = {};
    }
    if (!collection.hooks.beforeChange) {
        collection.hooks.beforeChange = [];
    }
    const orderBeforeChangeHook = async ({ data, originalDoc, req })=>{
        for (const orderableFieldName of orderableFieldNames){
            if (!data[orderableFieldName] && !originalDoc?.[orderableFieldName]) {
                const lastDoc = await req.payload.find({
                    collection: collection.slug,
                    depth: 0,
                    limit: 1,
                    pagination: false,
                    req,
                    select: {
                        [orderableFieldName]: true
                    },
                    sort: `-${orderableFieldName}`,
                    where: {
                        [orderableFieldName]: {
                            exists: true
                        }
                    }
                });
                const lastOrderValue = lastDoc.docs[0]?.[orderableFieldName] || null;
                data[orderableFieldName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$config$2f$orderable$2f$fractional$2d$indexing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateKeyBetween"])(lastOrderValue, null);
            }
        }
        return data;
    };
    collection.hooks.beforeChange.push(orderBeforeChangeHook);
};
const addOrderableEndpoint = (config)=>{
    // 3. Add endpoint
    const reorderHandler = async (req)=>{
        const body = await req.json?.();
        const { collectionSlug, docsToMove, newKeyWillBe, orderableFieldName, target } = body;
        if (!Array.isArray(docsToMove) || docsToMove.length === 0) {
            return new Response(JSON.stringify({
                error: 'docsToMove must be a non-empty array'
            }), {
                headers: {
                    'Content-Type': 'application/json'
                },
                status: 400
            });
        }
        if (newKeyWillBe !== 'greater' && newKeyWillBe !== 'less') {
            return new Response(JSON.stringify({
                error: 'newKeyWillBe must be "greater" or "less"'
            }), {
                headers: {
                    'Content-Type': 'application/json'
                },
                status: 400
            });
        }
        const collection = config.collections.find((c)=>c.slug === collectionSlug);
        if (!collection) {
            return new Response(JSON.stringify({
                error: `Collection ${collectionSlug} not found`
            }), {
                headers: {
                    'Content-Type': 'application/json'
                },
                status: 400
            });
        }
        if (typeof orderableFieldName !== 'string') {
            return new Response(JSON.stringify({
                error: 'orderableFieldName must be a string'
            }), {
                headers: {
                    'Content-Type': 'application/json'
                },
                status: 400
            });
        }
        // Prevent reordering if user doesn't have editing permissions
        if (collection.access?.update) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["executeAccess"])({
                // Currently only one doc can be moved at a time. We should review this if we want to allow
                // multiple docs to be moved at once in the future.
                id: docsToMove[0],
                data: {},
                req
            }, collection.access.update);
        }
        /**
     * If there is no target.key, we can assume the user enabled `orderable`
     * on a collection with existing documents, and that this is the first
     * time they tried to reorder them. Therefore, we perform a one-time
     * migration by setting the key value for all documents. We do this
     * instead of enforcing `required` and `unique` at the database schema
     * level, so that users don't have to run a migration when they enable
     * `orderable` on a collection with existing documents.
     */ if (!target.key) {
            const { docs } = await req.payload.find({
                collection: collection.slug,
                depth: 0,
                limit: 0,
                req,
                select: {
                    [orderableFieldName]: true
                },
                where: {
                    [orderableFieldName]: {
                        exists: false
                    }
                }
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initTransaction"])(req);
            // We cannot update all documents in a single operation with `payload.update`,
            // because they would all end up with the same order key (`a0`).
            try {
                for (const doc of docs){
                    await req.payload.update({
                        id: doc.id,
                        collection: collection.slug,
                        data: {},
                        depth: 0,
                        req
                    });
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["commitTransaction"])(req);
                }
            } catch (e) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["killTransaction"])(req);
                if (e instanceof Error) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"](e.message, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].INTERNAL_SERVER_ERROR);
                }
            }
            return new Response(JSON.stringify({
                message: 'initial migration',
                success: true
            }), {
                headers: {
                    'Content-Type': 'application/json'
                },
                status: 200
            });
        }
        if (typeof target !== 'object' || typeof target.id === 'undefined' || typeof target.key !== 'string') {
            return new Response(JSON.stringify({
                error: 'target must be an object with id'
            }), {
                headers: {
                    'Content-Type': 'application/json'
                },
                status: 400
            });
        }
        const targetId = target.id;
        let targetKey = target.key;
        // If targetKey = pending, we need to find its current key.
        // This can only happen if the user reorders rows quickly with a slow connection.
        if (targetKey === 'pending') {
            const beforeDoc = await req.payload.findByID({
                id: targetId,
                collection: collection.slug,
                depth: 0,
                select: {
                    [orderableFieldName]: true
                }
            });
            targetKey = beforeDoc?.[orderableFieldName] || null;
        }
        // The reason the endpoint does not receive this docId as an argument is that there
        // are situations where the user may not see or know what the next or previous one is. For
        // example, access control restrictions, if docBefore is the last one on the page, etc.
        const adjacentDoc = await req.payload.find({
            collection: collection.slug,
            depth: 0,
            limit: 1,
            pagination: false,
            select: {
                [orderableFieldName]: true
            },
            sort: newKeyWillBe === 'greater' ? orderableFieldName : `-${orderableFieldName}`,
            where: {
                [orderableFieldName]: {
                    [newKeyWillBe === 'greater' ? 'greater_than' : 'less_than']: targetKey
                }
            }
        });
        const adjacentDocKey = adjacentDoc.docs?.[0]?.[orderableFieldName] || null;
        // Currently N (= docsToMove.length) is always 1. Maybe in the future we will
        // allow dragging and reordering multiple documents at once via the UI.
        const orderValues = newKeyWillBe === 'greater' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$config$2f$orderable$2f$fractional$2d$indexing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateNKeysBetween"])(targetKey, adjacentDocKey, docsToMove.length) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$config$2f$orderable$2f$fractional$2d$indexing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateNKeysBetween"])(adjacentDocKey, targetKey, docsToMove.length);
        // Update each document with its new order value
        for (const [index, id] of docsToMove.entries()){
            await req.payload.update({
                id,
                collection: collection.slug,
                data: {
                    [orderableFieldName]: orderValues[index]
                },
                depth: 0,
                req
            });
        }
        return new Response(JSON.stringify({
            orderValues,
            success: true
        }), {
            headers: {
                'Content-Type': 'application/json'
            },
            status: 200
        });
    };
    const reorderEndpoint = {
        handler: reorderHandler,
        method: 'post',
        path: '/reorder'
    };
    if (!config.endpoints) {
        config.endpoints = [];
    }
    config.endpoints.push(reorderEndpoint);
}; //# sourceMappingURL=index.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/config/sanitize.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sanitizeConfig",
    ()=>sanitizeConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/@payloadcms/translations/dist/languages/en.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$deepMergeSimple$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/@payloadcms/translations/dist/utilities/deepMergeSimple.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultUser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/auth/defaultUser.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$endpoints$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/auth/endpoints/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$config$2f$sanitize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/collections/config/sanitize.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$migrationsCollection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/migrations/migrationsCollection.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$DuplicateCollection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/DuplicateCollection.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$InvalidConfiguration$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/InvalidConfiguration.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$baseFields$2f$timezone$2f$defaultTimezones$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/fields/baseFields/timezone/defaultTimezones.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$folders$2f$addFolderCollection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/folders/addFolderCollection.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$folders$2f$addFolderFieldToCollection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/folders/addFolderFieldToCollection.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$config$2f$sanitize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/config/sanitize.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$baseFields$2f$baseBlockFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/fields/baseFields/baseBlockFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/formatLabels.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$sanitize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/fields/config/sanitize.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$locked$2d$documents$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/locked-documents/config.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/preferences/config.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$query$2d$presets$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/query-presets/config.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$collection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/queues/config/collection.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$global$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/queues/config/global.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$flattenAllFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/flattenAllFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/getVersionsConfig.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$validateTimezones$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/validateTimezones.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$schedule$2f$job$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/schedule/job.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$config$2f$defaults$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/config/defaults.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$config$2f$orderable$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/config/orderable/index.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const sanitizeAdminConfig = (configToSanitize)=>{
    const sanitizedConfig = {
        ...configToSanitize
    };
    if (configToSanitize?.compatibility?.allowLocalizedWithinLocalized) {
        process.env.NEXT_PUBLIC_PAYLOAD_COMPATIBILITY_allowLocalizedWithinLocalized = 'true';
    }
    // default logging level will be 'error' if not provided
    sanitizedConfig.loggingLevels = {
        Forbidden: 'info',
        Locked: 'info',
        MissingFile: 'info',
        NotFound: 'info',
        ValidationError: 'info',
        ...sanitizedConfig.loggingLevels || {}
    };
    (sanitizedConfig.admin.dashboard ??= {
        widgets: []
    }).widgets.push({
        slug: 'collections',
        ComponentPath: '@payloadcms/next/rsc#CollectionCards',
        minWidth: 'full'
    });
    sanitizedConfig.admin.dashboard.defaultLayout ??= [
        {
            widgetSlug: 'collections',
            width: 'full'
        }
    ];
    // add default user collection if none provided
    if (!sanitizedConfig?.admin?.user) {
        const firstCollectionWithAuth = sanitizedConfig.collections.find(({ auth })=>Boolean(auth));
        if (firstCollectionWithAuth) {
            sanitizedConfig.admin.user = firstCollectionWithAuth.slug;
        } else {
            sanitizedConfig.admin.user = __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultUser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultUserCollection"].slug;
            sanitizedConfig.collections.push(__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultUser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultUserCollection"]);
        }
    }
    const userCollection = sanitizedConfig.collections.find(({ slug })=>slug === sanitizedConfig.admin.user);
    if (!userCollection || !userCollection.auth) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$InvalidConfiguration$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidConfiguration"](`${sanitizedConfig.admin.user} is not a valid admin user collection`);
    }
    if (sanitizedConfig?.admin?.timezones) {
        if (typeof configToSanitize?.admin?.timezones?.supportedTimezones === 'function') {
            sanitizedConfig.admin.timezones.supportedTimezones = configToSanitize.admin.timezones.supportedTimezones({
                defaultTimezones: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$baseFields$2f$timezone$2f$defaultTimezones$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultTimezones"]
            });
        }
        if (!sanitizedConfig?.admin?.timezones?.supportedTimezones) {
            sanitizedConfig.admin.timezones.supportedTimezones = __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$baseFields$2f$timezone$2f$defaultTimezones$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultTimezones"];
        }
    } else {
        sanitizedConfig.admin.timezones = {
            supportedTimezones: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$baseFields$2f$timezone$2f$defaultTimezones$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultTimezones"]
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$validateTimezones$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateTimezones"])({
        source: 'admin.timezones.supportedTimezones',
        timezones: sanitizedConfig.admin.timezones.supportedTimezones
    });
    return sanitizedConfig;
};
const sanitizeConfig = async (incomingConfig)=>{
    const configWithDefaults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$config$2f$defaults$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDefaultsToConfig"])(incomingConfig);
    const config = sanitizeAdminConfig(configWithDefaults);
    // Add orderable fields
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$config$2f$orderable$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setupOrderable"])(config);
    if (!config.endpoints) {
        config.endpoints = [];
    }
    for (const endpoint of __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$endpoints$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["authRootEndpoints"]){
        config.endpoints.push(endpoint);
    }
    if (config.localization && config.localization.locales?.length > 0) {
        // clone localization config so to not break everything
        const firstLocale = config.localization.locales[0];
        if (typeof firstLocale === 'string') {
            config.localization.localeCodes = [
                ...config.localization.locales
            ];
            // is string[], so convert to Locale[]
            config.localization.locales = config.localization.locales.map((locale)=>({
                    code: locale,
                    label: locale,
                    rtl: false,
                    toString: ()=>locale
                }));
        } else {
            // is Locale[], so convert to string[] for localeCodes
            config.localization.localeCodes = config.localization.locales.map((locale)=>locale.code);
            config.localization.locales = config.localization.locales.map((locale)=>({
                    ...locale,
                    toString: ()=>locale.code
                }));
        }
        // Default fallback to true if not provided
        config.localization.fallback = config.localization?.fallback ?? true;
    }
    const i18nConfig = {
        fallbackLanguage: 'en',
        supportedLanguages: {
            en: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["en"]
        },
        translations: {}
    };
    if (incomingConfig?.i18n) {
        i18nConfig.supportedLanguages = incomingConfig.i18n?.supportedLanguages || i18nConfig.supportedLanguages;
        const supportedLangKeys = Object.keys(i18nConfig.supportedLanguages);
        const fallbackLang = incomingConfig.i18n?.fallbackLanguage || i18nConfig.fallbackLanguage;
        i18nConfig.fallbackLanguage = supportedLangKeys.includes(fallbackLang) ? fallbackLang : supportedLangKeys[0];
        i18nConfig.translations = incomingConfig.i18n?.translations || i18nConfig.translations;
    }
    config.i18n = i18nConfig;
    const richTextSanitizationPromises = [];
    const schedulePublishCollections = [];
    const queryPresetsCollections = [];
    const schedulePublishGlobals = [];
    const collectionSlugs = new Set();
    const validRelationships = [
        ...config.collections?.map((c)=>c.slug) ?? [],
        __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$collection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jobsCollectionSlug"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$locked$2d$documents$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lockedDocumentsCollectionSlug"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["preferencesCollectionSlug"]
    ];
    if (config.folders !== false) {
        validRelationships.push(config.folders.slug);
    }
    const dashboardWidgets = config.admin?.dashboard?.widgets ?? [];
    for (const widget of dashboardWidgets){
        if (widget.fields?.length) {
            widget.fields = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$sanitize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeFields"])({
                config: config,
                existingFieldNames: new Set(),
                fields: widget.fields,
                parentIsLocalized: false,
                richTextSanitizationPromises,
                validRelationships
            });
        }
    }
    /**
   * Blocks sanitization needs to happen before collections, as collection/global join field sanitization needs config.blocks
   * to be populated with the sanitized blocks
   */ config.blocks = [];
    if (incomingConfig.blocks?.length) {
        for (const block of incomingConfig.blocks){
            const sanitizedBlock = block;
            if (sanitizedBlock._sanitized === true) {
                continue;
            }
            sanitizedBlock._sanitized = true;
            sanitizedBlock.fields = sanitizedBlock.fields.concat(__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$baseFields$2f$baseBlockFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["baseBlockFields"]);
            sanitizedBlock.labels = !sanitizedBlock.labels ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatLabels"])(sanitizedBlock.slug) : sanitizedBlock.labels;
            sanitizedBlock.fields = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$sanitize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeFields"])({
                config: config,
                existingFieldNames: new Set(),
                fields: sanitizedBlock.fields,
                parentIsLocalized: false,
                richTextSanitizationPromises,
                validRelationships
            });
            const flattenedSanitizedBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$flattenAllFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["flattenBlock"])({
                block
            });
            config.blocks.push(flattenedSanitizedBlock);
        }
    }
    const folderEnabledCollections = [];
    for(let i = 0; i < config.collections.length; i++){
        if (collectionSlugs.has(config.collections[i].slug)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$DuplicateCollection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DuplicateCollection"]('slug', config.collections[i].slug);
        }
        collectionSlugs.add(config.collections[i].slug);
        const draftsConfig = config.collections[i]?.versions?.drafts;
        if (typeof draftsConfig === 'object' && draftsConfig.schedulePublish) {
            schedulePublishCollections.push(config.collections[i].slug);
        }
        if (config.collections[i].enableQueryPresets) {
            queryPresetsCollections.push(config.collections[i].slug);
            if (!validRelationships.includes(__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$query$2d$presets$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryPresetsCollectionSlug"])) {
                validRelationships.push(__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$query$2d$presets$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryPresetsCollectionSlug"]);
            }
        }
        if (config.folders !== false && config.collections[i].folders) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$folders$2f$addFolderFieldToCollection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addFolderFieldToCollection"])({
                collection: config.collections[i],
                collectionSpecific: config.folders.collectionSpecific,
                folderFieldName: config.folders.fieldName,
                folderSlug: config.folders.slug
            });
        }
        config.collections[i] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$config$2f$sanitize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeCollection"])(config, config.collections[i], richTextSanitizationPromises, validRelationships);
        if (config.folders !== false && config.collections[i].folders) {
            folderEnabledCollections.push(config.collections[i]);
        }
    }
    if (config.globals.length > 0) {
        for(let i = 0; i < config.globals.length; i++){
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasScheduledPublishEnabled"])(config.globals[i])) {
                schedulePublishGlobals.push(config.globals[i].slug);
            }
            config.globals[i] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$config$2f$sanitize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeGlobal"])(config, config.globals[i], richTextSanitizationPromises, validRelationships);
        }
    }
    if (schedulePublishCollections.length || schedulePublishGlobals.length) {
        ;
        ((config.jobs ??= {}).tasks ??= []).push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$schedule$2f$job$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSchedulePublishTask"])({
            adminUserSlug: config.admin.user,
            collections: schedulePublishCollections,
            globals: schedulePublishGlobals
        }));
    }
    ;
    (config.jobs ??= {}).enabled = Boolean(Array.isArray(configWithDefaults.jobs?.tasks) && configWithDefaults.jobs?.tasks?.length || Array.isArray(configWithDefaults.jobs?.workflows) && configWithDefaults.jobs?.workflows?.length);
    // Need to add default jobs collection before locked documents collections
    if (config.jobs.enabled) {
        // Check for schedule property in both tasks and workflows
        const hasScheduleProperty = config?.jobs?.tasks?.length && config.jobs.tasks.some((task)=>task.schedule) || config?.jobs?.workflows?.length && config.jobs.workflows.some((workflow)=>workflow.schedule);
        if (hasScheduleProperty) {
            config.jobs.scheduling = true;
            (config.globals ??= []).push(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$config$2f$sanitize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeGlobal"])(config, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$global$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getJobStatsGlobal"])(config), richTextSanitizationPromises, validRelationships));
            config.jobs.stats = true;
        }
        let defaultJobsCollection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$collection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDefaultJobsCollection"])(config.jobs);
        if (typeof config.jobs.jobsCollectionOverrides === 'function') {
            defaultJobsCollection = config.jobs.jobsCollectionOverrides({
                defaultJobsCollection
            });
            const hooks = defaultJobsCollection?.hooks;
            // @todo - delete this check in 4.0
            if (hooks && config?.jobs?.runHooks !== true) {
                for (const [hookKey, hook] of Object.entries(hooks)){
                    const defaultAmount = hookKey === 'afterRead' || hookKey === 'beforeChange' ? 1 : 0;
                    if (hook.length > defaultAmount) {
                        // eslint-disable-next-line no-console
                        console.warn(`The jobsCollectionOverrides function is returning a collection with an additional ${hookKey} hook defined. These hooks will not run unless the jobs.runHooks option is set to true. Setting this option to true will negatively impact performance.`);
                        break;
                    }
                }
            }
        }
        const sanitizedJobsCollection = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$config$2f$sanitize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeCollection"])(config, defaultJobsCollection, richTextSanitizationPromises, validRelationships);
        (config.collections ??= []).push(sanitizedJobsCollection);
    }
    if (config.folders !== false && folderEnabledCollections.length) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$folders$2f$addFolderCollection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addFolderCollection"])({
            collectionSpecific: config.folders.collectionSpecific,
            config: config,
            folderEnabledCollections,
            richTextSanitizationPromises,
            validRelationships
        });
    }
    const lockedDocumentsCollection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$locked$2d$documents$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLockedDocumentsCollection"])(config);
    if (lockedDocumentsCollection) {
        configWithDefaults.collections.push(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$config$2f$sanitize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeCollection"])(config, lockedDocumentsCollection, richTextSanitizationPromises, validRelationships));
    }
    configWithDefaults.collections.push(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$config$2f$sanitize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeCollection"])(config, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPreferencesCollection"])(config), richTextSanitizationPromises, validRelationships));
    const migrations = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$config$2f$sanitize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeCollection"])(config, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$migrationsCollection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["migrationsCollection"], richTextSanitizationPromises, validRelationships);
    // @ts-expect-error indexSortableFields is only valid for @payloadcms/db-mongodb
    if (config?.db?.indexSortableFields) {
        migrations.indexes = [
            {
                fields: [
                    'batch',
                    'name'
                ],
                unique: false
            }
        ];
    }
    configWithDefaults.collections.push(migrations);
    if (queryPresetsCollections.length > 0) {
        configWithDefaults.collections.push(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$config$2f$sanitize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeCollection"])(config, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$query$2d$presets$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getQueryPresetsConfig"])(config), richTextSanitizationPromises, validRelationships));
    }
    if (config.serverURL !== '') {
        config.csrf.push(config.serverURL);
    }
    const uploadAdapters = new Set();
    // interact with all collections
    for (const collection of config.collections){
        // deduped upload adapters
        if (collection.upload?.adapter) {
            uploadAdapters.add(collection.upload.adapter);
        }
    }
    if (!config.upload) {
        config.upload = {
            adapters: []
        };
    }
    config.upload.adapters = Array.from(new Set(config.collections.map((c)=>c.upload?.adapter).filter(Boolean)));
    // Pass through the email config as is so adapters don't break
    if (incomingConfig.email) {
        config.email = incomingConfig.email;
    }
    /*
    Execute richText sanitization
   */ if (typeof incomingConfig.editor === 'function') {
        config.editor = await incomingConfig.editor({
            config: config,
            isRoot: true,
            parentIsLocalized: false
        });
        if (config.editor.i18n && Object.keys(config.editor.i18n).length >= 0) {
            config.i18n.translations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$deepMergeSimple$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deepMergeSimple"])(config.i18n.translations, config.editor.i18n);
        }
    }
    const promises = [];
    for (const sanitizeFunction of richTextSanitizationPromises){
        promises.push(sanitizeFunction(config));
    }
    await Promise.all(promises);
    return config;
}; //# sourceMappingURL=sanitize.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/config/build.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildConfig",
    ()=>buildConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$config$2f$sanitize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/config/sanitize.js [app-rsc] (ecmascript)");
;
async function buildConfig(config) {
    if (Array.isArray(config.plugins)) {
        let configAfterPlugins = config;
        for (const plugin of config.plugins){
            configAfterPlugins = await plugin(configAfterPlugins);
        }
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$config$2f$sanitize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeConfig"])(configAfterPlugins);
    }
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$config$2f$sanitize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeConfig"])(config);
} //# sourceMappingURL=build.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/folders/buildFolderField.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildFolderField",
    ()=>buildFolderField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$extractID$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/extractID.js [app-rsc] (ecmascript)");
;
const buildFolderField = ({ collectionSpecific, folderFieldName, folderSlug, overrides = {} })=>{
    const field = {
        name: folderFieldName,
        type: 'relationship',
        admin: {},
        hasMany: false,
        index: true,
        label: 'Folder',
        relationTo: folderSlug,
        validate: async (value, { collectionSlug, data, overrideAccess, previousValue, req })=>{
            if (!collectionSpecific) {
                // if collection scoping is not enabled, no validation required since folders can contain any type of document
                return true;
            }
            if (!value) {
                // no folder, no validation required
                return true;
            }
            const newID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$extractID$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extractID"])(value);
            if (previousValue && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$extractID$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extractID"])(previousValue) === newID) {
                // value did not change, no validation required
                return true;
            } else {
                // need to validat the folder value allows this collection type
                let parentFolder = null;
                if (typeof value === 'string' || typeof value === 'number') {
                    // need to populate the value with the document
                    parentFolder = await req.payload.findByID({
                        id: newID,
                        collection: folderSlug,
                        depth: 0,
                        overrideAccess,
                        req,
                        select: {
                            folderType: true
                        },
                        user: req.user
                    });
                }
                if (parentFolder && collectionSlug) {
                    const parentFolderTypes = parentFolder.folderType || [];
                    // if the parent folder has no folder types, it accepts all collections
                    if (parentFolderTypes.length === 0) {
                        return true;
                    }
                    // validation for a folder document
                    if (collectionSlug === folderSlug) {
                        // ensure the parent accepts ALL folder types
                        const folderTypes = 'folderType' in data ? data.folderType : [];
                        const invalidSlugs = folderTypes.filter((validCollectionSlug)=>{
                            return !parentFolderTypes.includes(validCollectionSlug);
                        });
                        if (invalidSlugs.length === 0) {
                            return true;
                        } else {
                            return `Folder with ID ${newID} does not allow documents of type ${invalidSlugs.join(', ')}`;
                        }
                    }
                    // validation for a non-folder document
                    if (parentFolderTypes.includes(collectionSlug)) {
                        return true;
                    } else {
                        return `Folder with ID ${newID} does not allow documents of type ${collectionSlug}`;
                    }
                } else {
                    return `Folder with ID ${newID} not found in collection ${folderSlug}`;
                }
            }
        }
    };
    if (overrides?.admin) {
        field.admin = {
            ...field.admin,
            ...overrides.admin || {}
        };
        if (overrides.admin.components) {
            field.admin.components = {
                ...field.admin.components,
                ...overrides.admin.components || {}
            };
        }
    }
    return field;
}; //# sourceMappingURL=buildFolderField.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/folders/hooks/deleteSubfoldersAfterDelete.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteSubfoldersBeforeDelete",
    ()=>deleteSubfoldersBeforeDelete
]);
const deleteSubfoldersBeforeDelete = ({ folderFieldName, folderSlug })=>{
    return async ({ id, req })=>{
        await req.payload.delete({
            collection: folderSlug,
            req,
            where: {
                [folderFieldName]: {
                    equals: id
                }
            }
        });
    };
}; //# sourceMappingURL=deleteSubfoldersAfterDelete.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/folders/hooks/dissasociateAfterDelete.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dissasociateAfterDelete",
    ()=>dissasociateAfterDelete
]);
const dissasociateAfterDelete = ({ collectionSlugs, folderFieldName })=>{
    return async ({ id, req })=>{
        for (const collectionSlug of collectionSlugs){
            await req.payload.update({
                collection: collectionSlug,
                data: {
                    [folderFieldName]: null
                },
                req,
                where: {
                    [folderFieldName]: {
                        equals: id
                    }
                }
            });
        }
    };
}; //# sourceMappingURL=dissasociateAfterDelete.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/folders/hooks/ensureSafeCollectionsChange.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensureSafeCollectionsChange",
    ()=>ensureSafeCollectionsChange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$extractID$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/extractID.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getTranslatedLabel$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/getTranslatedLabel.js [app-rsc] (ecmascript)");
;
;
;
const ensureSafeCollectionsChange = ({ foldersSlug })=>async ({ data, originalDoc, req })=>{
        const currentFolderID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$extractID$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extractID"])(originalDoc || {});
        const parentFolderID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$extractID$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extractID"])(data?.folder || originalDoc?.folder || {});
        if (Array.isArray(data?.folderType) && data.folderType.length > 0) {
            const folderType = data.folderType;
            const currentlyAssignedCollections = Array.isArray(originalDoc?.folderType) && originalDoc.folderType.length > 0 ? originalDoc.folderType : undefined;
            /**
       * Check if the assigned collections have changed.
       * example:
       * - originalAssignedCollections: ['posts', 'pages']
       * - folderType: ['posts']
       *
       * The user is narrowing the types of documents that can be associated with this folder.
       * If the user is only expanding the types of documents that can be associated with this folder,
       * we do not need to do anything.
       */ const newCollections = currentlyAssignedCollections ? currentlyAssignedCollections.filter((c)=>!folderType.includes(c)) : folderType;
            if (newCollections && newCollections.length > 0) {
                let hasDependentDocuments = false;
                if (typeof currentFolderID === 'string' || typeof currentFolderID === 'number') {
                    const childDocumentsResult = await req.payload.findByID({
                        id: currentFolderID,
                        collection: foldersSlug,
                        joins: {
                            documentsAndFolders: {
                                limit: 100_000_000,
                                where: {
                                    or: [
                                        {
                                            relationTo: {
                                                in: newCollections
                                            }
                                        }
                                    ]
                                }
                            }
                        },
                        overrideAccess: true,
                        req
                    });
                    hasDependentDocuments = childDocumentsResult.documentsAndFolders.docs.length > 0;
                }
                // matches folders that are directly related to the removed collections
                let hasDependentFolders = false;
                if (!hasDependentDocuments && (typeof currentFolderID === 'string' || typeof currentFolderID === 'number')) {
                    const childFoldersResult = await req.payload.find({
                        collection: foldersSlug,
                        limit: 1,
                        req,
                        where: {
                            and: [
                                {
                                    folderType: {
                                        in: newCollections
                                    }
                                },
                                {
                                    folder: {
                                        equals: currentFolderID
                                    }
                                }
                            ]
                        }
                    });
                    hasDependentFolders = childFoldersResult.totalDocs > 0;
                }
                if (hasDependentDocuments || hasDependentFolders) {
                    const translatedLabels = newCollections.map((collectionSlug)=>{
                        if (req.payload.collections[collectionSlug]?.config.labels.singular) {
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getTranslatedLabel$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslatedLabel"])(req.payload.collections[collectionSlug]?.config.labels.plural, req.i18n);
                        }
                        return collectionSlug;
                    });
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"](`The folder "${data.name || originalDoc.name}" contains ${hasDependentDocuments ? 'documents' : 'folders'} that still belong to the following collections: ${translatedLabels.join(', ')}`, 400);
                }
                return data;
            }
        } else if ((data?.folderType === null || Array.isArray(data?.folderType) && data?.folderType.length === 0) && parentFolderID) {
            // attempting to set the folderType to catch-all, so we need to ensure that the parent allows this
            let parentFolder;
            if (typeof parentFolderID === 'string' || typeof parentFolderID === 'number') {
                try {
                    parentFolder = await req.payload.findByID({
                        id: parentFolderID,
                        collection: foldersSlug,
                        overrideAccess: true,
                        req,
                        select: {
                            name: true,
                            folderType: true
                        },
                        user: req.user
                    });
                } catch (_) {
                // parent folder does not exist
                }
            }
            if (parentFolder && parentFolder?.folderType && Array.isArray(parentFolder.folderType) && parentFolder.folderType.length > 0) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"](`The folder "${data?.name || originalDoc.name}" must have folder-type set since its parent folder ${parentFolder?.name ? `"${parentFolder?.name}" ` : ''}has a folder-type set.`, 400);
            }
        }
        return data;
    }; //# sourceMappingURL=ensureSafeCollectionsChange.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/folders/hooks/reparentChildFolder.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reparentChildFolder",
    ()=>reparentChildFolder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$extractID$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/extractID.js [app-rsc] (ecmascript)");
;
/**
 * Determines if a child folder belongs to a parent folder by
 * recursively checking upwards through the folder hierarchy.
 */ async function isChildOfFolder({ folderCollectionSlug, folderFieldName, folderID, parentIDToFind, payload }) {
    const parentFolder = await payload.findByID({
        id: folderID,
        collection: folderCollectionSlug
    });
    const parentFolderID = parentFolder[folderFieldName] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$extractID$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extractID"])(parentFolder[folderFieldName]) : undefined;
    if (!parentFolderID) {
        // made it to the root
        return false;
    }
    if (parentFolderID === parentIDToFind) {
        // found match, would be cyclic
        return true;
    }
    return isChildOfFolder({
        folderCollectionSlug,
        folderFieldName,
        folderID: parentFolderID,
        parentIDToFind,
        payload
    });
}
const reparentChildFolder = ({ folderFieldName })=>{
    return async ({ doc, previousDoc, req })=>{
        if (previousDoc[folderFieldName] !== doc[folderFieldName] && doc[folderFieldName] && req.payload.config.folders) {
            const newParentFolderID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$extractID$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extractID"])(doc[folderFieldName]);
            const isMovingToChild = newParentFolderID ? await isChildOfFolder({
                folderCollectionSlug: req.payload.config.folders.slug,
                folderFieldName,
                folderID: newParentFolderID,
                parentIDToFind: doc.id,
                payload: req.payload
            }) : false;
            if (isMovingToChild) {
                // if the folder was moved into a child folder, the child folder needs
                // to be re-parented with the parent of the folder that was moved
                await req.payload.update({
                    id: newParentFolderID,
                    collection: req.payload.config.folders.slug,
                    data: {
                        [folderFieldName]: previousDoc[folderFieldName] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$extractID$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extractID"])(previousDoc[folderFieldName]) : null
                    },
                    req
                });
            }
        }
    };
}; //# sourceMappingURL=reparentChildFolder.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/folders/createFolderCollection.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createFolderCollection",
    ()=>createFolderCollection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/auth/defaultAccess.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$folders$2f$buildFolderField$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/folders/buildFolderField.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$folders$2f$hooks$2f$deleteSubfoldersAfterDelete$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/folders/hooks/deleteSubfoldersAfterDelete.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$folders$2f$hooks$2f$dissasociateAfterDelete$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/folders/hooks/dissasociateAfterDelete.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$folders$2f$hooks$2f$ensureSafeCollectionsChange$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/folders/hooks/ensureSafeCollectionsChange.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$folders$2f$hooks$2f$reparentChildFolder$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/folders/hooks/reparentChildFolder.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
const createFolderCollection = ({ slug, collectionSpecific, debug, folderEnabledCollections, folderFieldName })=>{
    const { collectionOptions, collectionSlugs } = folderEnabledCollections.reduce((acc, collection)=>{
        acc.collectionSlugs.push(collection.slug);
        acc.collectionOptions.push({
            label: collection.labels?.plural || collection.slug,
            value: collection.slug
        });
        return acc;
    }, {
        collectionOptions: [],
        collectionSlugs: []
    });
    return {
        slug,
        access: {
            create: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultAccess"],
            delete: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultAccess"],
            read: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultAccess"],
            readVersions: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultAccess"],
            update: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultAccess"]
        },
        admin: {
            hidden: !debug,
            useAsTitle: 'name'
        },
        fields: [
            {
                name: 'name',
                type: 'text',
                index: true,
                required: true
            },
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$folders$2f$buildFolderField$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildFolderField"])({
                collectionSpecific,
                folderFieldName,
                folderSlug: slug,
                overrides: {
                    admin: {
                        hidden: !debug
                    }
                }
            }),
            {
                name: 'documentsAndFolders',
                type: 'join',
                admin: {
                    hidden: !debug
                },
                collection: [
                    slug,
                    ...collectionSlugs
                ],
                hasMany: true,
                on: folderFieldName
            },
            ...collectionSpecific ? [
                {
                    name: 'folderType',
                    type: 'select',
                    admin: {
                        components: {
                            Field: {
                                path: '@payloadcms/next/client#FolderTypeField'
                            }
                        },
                        position: 'sidebar'
                    },
                    hasMany: true,
                    options: collectionOptions
                }
            ] : []
        ],
        hooks: {
            afterChange: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$folders$2f$hooks$2f$reparentChildFolder$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["reparentChildFolder"])({
                    folderFieldName
                })
            ],
            afterDelete: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$folders$2f$hooks$2f$dissasociateAfterDelete$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dissasociateAfterDelete"])({
                    collectionSlugs,
                    folderFieldName
                })
            ],
            beforeDelete: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$folders$2f$hooks$2f$deleteSubfoldersAfterDelete$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteSubfoldersBeforeDelete"])({
                    folderFieldName,
                    folderSlug: slug
                })
            ],
            beforeValidate: [
                ...collectionSpecific ? [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$folders$2f$hooks$2f$ensureSafeCollectionsChange$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureSafeCollectionsChange"])({
                        foldersSlug: slug
                    })
                ] : []
            ]
        },
        labels: {
            plural: 'Folders',
            singular: 'Folder'
        },
        typescript: {
            interface: 'FolderInterface'
        }
    };
}; //# sourceMappingURL=createFolderCollection.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/folders/addFolderCollection.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addFolderCollection",
    ()=>addFolderCollection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$config$2f$sanitize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/collections/config/sanitize.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$folders$2f$createFolderCollection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/folders/createFolderCollection.js [app-rsc] (ecmascript)");
;
;
async function addFolderCollection({ collectionSpecific, config, folderEnabledCollections, richTextSanitizationPromises = [], validRelationships = [] }) {
    if (config.folders === false) {
        return;
    }
    let folderCollectionConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$folders$2f$createFolderCollection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createFolderCollection"])({
        slug: config.folders.slug,
        collectionSpecific,
        debug: config.folders.debug,
        folderEnabledCollections,
        folderFieldName: config.folders.fieldName
    });
    const collectionIndex = config.collections.push(folderCollectionConfig);
    if (Array.isArray(config.folders?.collectionOverrides) && config?.folders.collectionOverrides.length) {
        for (const override of config.folders.collectionOverrides){
            folderCollectionConfig = await override({
                collection: folderCollectionConfig
            });
        }
    }
    const sanitizedCollectionWithOverrides = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$config$2f$sanitize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeCollection"])(config, folderCollectionConfig, richTextSanitizationPromises, validRelationships);
    config.collections[collectionIndex - 1] = sanitizedCollectionWithOverrides;
} //# sourceMappingURL=addFolderCollection.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/folders/addFolderFieldToCollection.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addFolderFieldToCollection",
    ()=>addFolderFieldToCollection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$folders$2f$buildFolderField$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/folders/buildFolderField.js [app-rsc] (ecmascript)");
;
const addFolderFieldToCollection = ({ collection, collectionSpecific, folderFieldName, folderSlug })=>{
    collection.fields.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$folders$2f$buildFolderField$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildFolderField"])({
        collectionSpecific,
        folderFieldName,
        folderSlug,
        overrides: {
            admin: {
                allowCreate: false,
                allowEdit: false,
                components: {
                    Cell: '@payloadcms/next/rsc#FolderTableCell',
                    Field: '@payloadcms/next/rsc#FolderField'
                }
            }
        }
    }));
}; //# sourceMappingURL=addFolderFieldToCollection.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/folders/constants.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "foldersSlug",
    ()=>foldersSlug,
    "parentFolderFieldName",
    ()=>parentFolderFieldName
]);
const foldersSlug = 'payload-folders';
const parentFolderFieldName = 'folder'; //# sourceMappingURL=constants.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/query-presets/access.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAccess",
    ()=>getAccess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/auth/defaultAccess.js [app-rsc] (ecmascript)");
;
const operations = [
    'delete',
    'read',
    'update',
    'create'
];
const defaultCollectionAccess = {
    create: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultAccess"],
    delete: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultAccess"],
    read: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultAccess"],
    unlock: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultAccess"],
    update: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultAccess"]
};
const getAccess = (config)=>operations.reduce((acc, operation)=>{
        acc[operation] = async (args)=>{
            const { req } = args;
            const collectionAccess = config?.queryPresets?.access?.[operation] ? await config.queryPresets.access[operation](args) : defaultCollectionAccess?.[operation] ? defaultCollectionAccess[operation](args) : true;
            // If collection-level access control is `false`, no need to continue to document-level access
            if (collectionAccess === false) {
                return false;
            }
            // The `create` operation does not affect the document-level access control
            if (operation === 'create') {
                return collectionAccess;
            }
            return {
                and: [
                    {
                        or: [
                            // Default access control ensures a user exists, but custom access control may not
                            ...req?.user ? [
                                {
                                    and: [
                                        {
                                            [`access.${operation}.users`]: {
                                                in: [
                                                    req.user.id
                                                ]
                                            }
                                        },
                                        {
                                            [`access.${operation}.constraint`]: {
                                                in: [
                                                    'onlyMe',
                                                    'specificUsers'
                                                ]
                                            }
                                        }
                                    ]
                                }
                            ] : [],
                            {
                                [`access.${operation}.constraint`]: {
                                    equals: 'everyone'
                                }
                            },
                            ...await Promise.all((config?.queryPresets?.constraints?.[operation] || []).map(async (constraint)=>{
                                const constraintAccess = constraint.access ? await constraint.access(args) : undefined;
                                return {
                                    and: [
                                        ...typeof constraintAccess === 'object' ? [
                                            constraintAccess
                                        ] : constraintAccess === false ? [
                                            {
                                                id: {
                                                    equals: null
                                                }
                                            }
                                        ] : [],
                                        {
                                            [`access.${operation}.constraint`]: {
                                                equals: constraint.value
                                            }
                                        }
                                    ]
                                };
                            }))
                        ]
                    },
                    ...typeof collectionAccess === 'object' ? [
                        collectionAccess
                    ] : []
                ]
            };
        };
        return acc;
    }, {}); //# sourceMappingURL=access.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/query-presets/preventLockout.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "preventLockout",
    ()=>preventLockout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/createLocalReq.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/initTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/killTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$query$2d$presets$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/query-presets/config.js [app-rsc] (ecmascript)");
;
;
;
;
;
const preventLockout = async (value, { data, overrideAccess, req: incomingReq })=>{
    // Use context to ensure an infinite loop doesn't occur
    if (!incomingReq.context._preventLockout && !overrideAccess) {
        const req = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLocalReq"])({
            context: {
                _preventLockout: true
            },
            req: {
                user: incomingReq.user
            }
        }, incomingReq.payload);
        // Might be `null` if no transactions are enabled
        const transaction = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initTransaction"])(req);
        // create a temp record to validate the constraints, using the req
        const tempPreset = await req.payload.create({
            collection: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$query$2d$presets$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryPresetsCollectionSlug"],
            data: {
                ...data,
                isTemp: true
            },
            req
        });
        let canUpdate = false;
        let canRead = false;
        try {
            await req.payload.findByID({
                id: tempPreset.id,
                collection: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$query$2d$presets$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryPresetsCollectionSlug"],
                overrideAccess: false,
                req,
                user: req.user
            });
            canRead = true;
            await req.payload.update({
                id: tempPreset.id,
                collection: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$query$2d$presets$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryPresetsCollectionSlug"],
                data: tempPreset,
                overrideAccess: false,
                req,
                user: req.user
            });
            canUpdate = true;
        } catch (_err) {
            if (!canRead || !canUpdate) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]('This action will lock you out of this preset.', 403, {}, true);
            }
        } finally{
            if (transaction) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["killTransaction"])(req);
            } else {
                // delete the temp record
                await req.payload.delete({
                    id: tempPreset.id,
                    collection: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$query$2d$presets$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryPresetsCollectionSlug"],
                    req
                });
            }
        }
    }
    return true;
}; //# sourceMappingURL=preventLockout.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/query-presets/types.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Note: order matters here as it will change the rendered order in the UI
__turbopack_context__.s([
    "operations",
    ()=>operations
]);
const operations = [
    'read',
    'update',
    'delete'
]; //# sourceMappingURL=types.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/query-presets/constraints.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getConstraints",
    ()=>getConstraints
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/formatLabels.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$query$2d$presets$2f$preventLockout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/query-presets/preventLockout.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$query$2d$presets$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/query-presets/types.js [app-rsc] (ecmascript)");
;
;
;
;
;
const defaultConstraintOptions = [
    {
        label: 'Everyone',
        value: 'everyone'
    },
    {
        label: 'Only Me',
        value: 'onlyMe'
    },
    {
        label: 'Specific Users',
        value: 'specificUsers'
    }
];
const getConstraints = (config)=>({
        name: 'access',
        type: 'group',
        admin: {
            components: {
                Cell: '@payloadcms/next/client#QueryPresetsAccessCell'
            },
            condition: (data)=>Boolean(data?.isShared)
        },
        fields: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$query$2d$presets$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["operations"].map((constraintOperation)=>({
                type: 'collapsible',
                fields: [
                    {
                        name: constraintOperation,
                        type: 'group',
                        admin: {
                            hideGutter: true
                        },
                        fields: [
                            {
                                name: 'constraint',
                                type: 'select',
                                defaultValue: 'onlyMe',
                                filterOptions: (args)=>typeof config?.queryPresets?.filterConstraints === 'function' ? config.queryPresets.filterConstraints(args) : args.options,
                                label: ({ i18n })=>`Specify who can ${constraintOperation} this ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(config.queryPresets?.labels?.singular || 'Preset', i18n)}`,
                                options: [
                                    ...defaultConstraintOptions,
                                    ...config?.queryPresets?.constraints?.[constraintOperation]?.map((option)=>({
                                            label: option.label,
                                            value: option.value
                                        })) || []
                                ]
                            },
                            {
                                name: 'users',
                                type: 'relationship',
                                admin: {
                                    condition: (data)=>Boolean(data?.access?.[constraintOperation]?.constraint === 'specificUsers')
                                },
                                hasMany: true,
                                hooks: {
                                    beforeChange: [
                                        ({ data, req })=>{
                                            if (data?.access?.[constraintOperation]?.constraint === 'onlyMe' && req.user) {
                                                return [
                                                    req.user.id
                                                ];
                                            }
                                            if (data?.access?.[constraintOperation]?.constraint === 'specificUsers' && req.user) {
                                                return [
                                                    ...data?.access?.[constraintOperation]?.users || [],
                                                    req.user.id
                                                ];
                                            }
                                        }
                                    ]
                                },
                                relationTo: config.admin?.user ?? 'users'
                            },
                            ...config?.queryPresets?.constraints?.[constraintOperation]?.reduce((acc, option)=>{
                                option.fields?.forEach((field, index)=>{
                                    acc.push({
                                        ...field
                                    });
                                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
                                        acc[index].admin = {
                                            ...acc[index]?.admin || {},
                                            condition: (data)=>Boolean(data?.access?.[constraintOperation]?.constraint === option.value)
                                        };
                                    }
                                });
                                return acc;
                            }, []) || []
                        ],
                        label: false
                    }
                ],
                label: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toWords"])(constraintOperation)
            })),
        label: 'Sharing settings',
        validate: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$query$2d$presets$2f$preventLockout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["preventLockout"]
    }); //# sourceMappingURL=constraints.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/query-presets/config.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getQueryPresetsConfig",
    ()=>getQueryPresetsConfig,
    "queryPresetsCollectionSlug",
    ()=>queryPresetsCollectionSlug
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$transformWhereQuery$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/transformWhereQuery.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$validateWhereQuery$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/validateWhereQuery.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$query$2d$presets$2f$access$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/query-presets/access.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$query$2d$presets$2f$constraints$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/query-presets/constraints.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$query$2d$presets$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/query-presets/types.js [app-rsc] (ecmascript)");
;
;
;
;
;
const queryPresetsCollectionSlug = 'payload-query-presets';
const getQueryPresetsConfig = (config)=>({
        slug: queryPresetsCollectionSlug,
        access: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$query$2d$presets$2f$access$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAccess"])(config),
        admin: {
            defaultColumns: [
                'title',
                'isShared',
                'access',
                'where',
                'columns',
                'groupBy'
            ],
            hidden: true,
            useAsTitle: 'title'
        },
        fields: [
            {
                name: 'title',
                type: 'text',
                required: true
            },
            {
                name: 'isShared',
                type: 'checkbox',
                defaultValue: false,
                validate: (isShared, { data })=>{
                    const typedData = data;
                    // ensure the `isShared` is only true if all constraints are 'onlyMe'
                    if (typedData?.access) {
                        const someOperationsAreShared = Object.values(typedData.access).some((operation)=>operation.constraint !== 'onlyMe');
                        if (!isShared && someOperationsAreShared) {
                            return 'If any constraint is not "onlyMe", the preset must be shared';
                        }
                    }
                    return true;
                }
            },
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$query$2d$presets$2f$constraints$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getConstraints"])(config),
            {
                name: 'where',
                type: 'json',
                admin: {
                    components: {
                        Cell: '@payloadcms/next/client#QueryPresetsWhereCell',
                        Field: '@payloadcms/next/client#QueryPresetsWhereField'
                    }
                },
                hooks: {
                    beforeValidate: [
                        ({ data })=>{
                            // transform the "where" query here so that the client-side doesn't have to
                            if (data?.where) {
                                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$validateWhereQuery$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateWhereQuery"])(data.where)) {
                                    return data.where;
                                } else {
                                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$transformWhereQuery$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformWhereQuery"])(data.where);
                                }
                            }
                            return data?.where;
                        }
                    ]
                },
                label: 'Filters'
            },
            {
                name: 'columns',
                type: 'json',
                admin: {
                    components: {
                        Cell: '@payloadcms/next/client#QueryPresetsColumnsCell',
                        Field: '@payloadcms/next/client#QueryPresetsColumnField'
                    }
                },
                validate: (value)=>{
                    if (value) {
                        try {
                            JSON.parse(JSON.stringify(value));
                        } catch  {
                            return 'Invalid JSON';
                        }
                    }
                    return true;
                }
            },
            {
                name: 'groupBy',
                type: 'text',
                admin: {
                    components: {
                        Cell: '@payloadcms/next/client#QueryPresetsGroupByCell',
                        Field: '@payloadcms/next/client#QueryPresetsGroupByField'
                    }
                },
                label: 'Group By'
            },
            {
                name: 'relatedCollection',
                type: 'select',
                admin: {
                    hidden: true
                },
                options: config.collections ? config.collections.reduce((acc, collection)=>{
                    if (collection.enableQueryPresets) {
                        acc.push({
                            label: collection.labels?.plural || collection.slug,
                            value: collection.slug
                        });
                    }
                    return acc;
                }, []) : [],
                required: true
            },
            {
                name: 'isTemp',
                type: 'checkbox',
                admin: {
                    description: "This is a temporary field used to determine if updating the preset would remove the user's access to it. When `true`, this record will be deleted after running the preset's `validate` function.",
                    disabled: true,
                    hidden: true
                }
            }
        ],
        hooks: {
            beforeValidate: [
                ({ data, operation })=>{
                    // TODO: type this
                    const typedData = data;
                    if (operation === 'create' || operation === 'update') {
                        // Ensure all operations have a constraint
                        __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$query$2d$presets$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["operations"].forEach((operation)=>{
                            if (!typedData.access) {
                                typedData.access = {};
                            }
                            if (!typedData.access?.[operation]) {
                                typedData[operation] = {};
                            }
                            // Ensure all operations have a constraint
                            if (!typedData.access[operation]?.constraint) {
                                typedData.access[operation] = {
                                    ...typedData.access[operation],
                                    constraint: 'onlyMe'
                                };
                            }
                        });
                        // If at least one constraint is not `onlyMe` then `isShared` must be true
                        if (typedData?.access) {
                            const someOperationsAreShared = Object.values(typedData.access).some((operation)=>operation.constraint !== 'onlyMe');
                            typedData.isShared = someOperationsAreShared;
                        }
                    }
                    return typedData;
                }
            ]
        },
        labels: {
            plural: 'Presets',
            singular: 'Preset',
            ...config.queryPresets?.labels || {}
        },
        lockDocuments: false
    }); //# sourceMappingURL=config.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/kv/adapters/DatabaseKVAdapter.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DatabaseKVAdapter",
    ()=>DatabaseKVAdapter,
    "databaseKVAdapter",
    ()=>databaseKVAdapter
]);
/** Mocked `req`, we don't need to use transactions, neither we want `createLocalReq` overhead. */ const req = {};
class DatabaseKVAdapter {
    payload;
    collectionSlug;
    constructor(payload, collectionSlug){
        this.payload = payload;
        this.collectionSlug = collectionSlug;
    }
    async clear() {
        await this.payload.db.deleteMany({
            collection: this.collectionSlug,
            req,
            where: {}
        });
    }
    async delete(key) {
        await this.payload.db.deleteOne({
            collection: this.collectionSlug,
            req,
            where: {
                key: {
                    equals: key
                }
            }
        });
    }
    async get(key) {
        const doc = await this.payload.db.findOne({
            collection: this.collectionSlug,
            joins: false,
            req,
            select: {
                data: true,
                key: true
            },
            where: {
                key: {
                    equals: key
                }
            }
        });
        if (doc === null) {
            return null;
        }
        return doc.data;
    }
    async has(key) {
        const { totalDocs } = await this.payload.db.count({
            collection: this.collectionSlug,
            req,
            where: {
                key: {
                    equals: key
                }
            }
        });
        return totalDocs > 0;
    }
    async keys() {
        const result = await this.payload.db.find({
            collection: this.collectionSlug,
            limit: 0,
            pagination: false,
            req,
            select: {
                key: true
            }
        });
        return result.docs.map((each)=>each.key);
    }
    async set(key, data) {
        await this.payload.db.upsert({
            collection: this.collectionSlug,
            data: {
                data,
                key
            },
            joins: false,
            req,
            select: {},
            where: {
                key: {
                    equals: key
                }
            }
        });
    }
}
const databaseKVAdapter = (options = {})=>{
    const collectionSlug = options.kvCollectionOverrides?.slug ?? 'payload-kv';
    return {
        init: ({ payload })=>new DatabaseKVAdapter(payload, collectionSlug),
        kvCollection: {
            slug: collectionSlug,
            access: {
                create: ()=>false,
                delete: ()=>false,
                read: ()=>false,
                update: ()=>false
            },
            admin: {
                hidden: true
            },
            fields: [
                {
                    name: 'key',
                    type: 'text',
                    index: true,
                    required: true,
                    unique: true
                },
                {
                    name: 'data',
                    type: 'json',
                    required: true
                }
            ],
            lockDocuments: false,
            timestamps: false,
            ...options.kvCollectionOverrides
        }
    };
}; //# sourceMappingURL=DatabaseKVAdapter.js.map
}),
];

//# sourceMappingURL=26d36_payload_dist_4ce899f5._.js.map