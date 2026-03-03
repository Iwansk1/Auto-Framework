module.exports = [
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/countGlobalVersions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "countGlobalVersionsOperation",
    ()=>countGlobalVersionsOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/auth/executeAccess.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/combineQueries.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/queryValidation/validateQueryPaths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildGlobalFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/buildGlobalFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/killTransaction.js [app-rsc] (ecmascript)");
;
;
;
;
;
const countGlobalVersionsOperation = async (args)=>{
    try {
        const { disableErrors, global, overrideAccess, where } = args;
        const req = args.req;
        const { payload } = req;
        // /////////////////////////////////////
        // beforeOperation - Global
        // /////////////////////////////////////
        if (global.hooks?.beforeOperation?.length) {
            for (const hook of global.hooks.beforeOperation){
                args = await hook({
                    args,
                    context: req.context,
                    global,
                    operation: 'countVersions',
                    overrideAccess,
                    req
                }) || args;
            }
        }
        // /////////////////////////////////////
        // Access
        // /////////////////////////////////////
        let accessResult;
        if (!overrideAccess) {
            accessResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["executeAccess"])({
                disableErrors,
                req
            }, global.access.readVersions);
            // If errors are disabled, and access returns false, return empty results
            if (accessResult === false) {
                return {
                    totalDocs: 0
                };
            }
        }
        const fullWhere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["combineQueries"])(where, accessResult);
        const versionFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildGlobalFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildVersionGlobalFields"])(payload.config, global, true);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateQueryPaths"])({
            globalConfig: global,
            overrideAccess: overrideAccess,
            req,
            versionFields,
            where: where
        });
        const result = await payload.db.countGlobalVersions({
            global: global.slug,
            req,
            where: fullWhere
        });
        // /////////////////////////////////////
        // Return results
        // /////////////////////////////////////
        return result;
    } catch (error) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["killTransaction"])(args.req);
        throw error;
    }
}; //# sourceMappingURL=countGlobalVersions.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/local/countVersions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "countGlobalVersionsLocal",
    ()=>countGlobalVersionsLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/createLocalReq.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$countGlobalVersions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/countGlobalVersions.js [app-rsc] (ecmascript)");
;
;
;
async function countGlobalVersionsLocal(payload, options) {
    const { disableErrors, global: globalSlug, overrideAccess = true, where } = options;
    const global = payload.globals.config.find(({ slug })=>slug === globalSlug);
    if (!global) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"](`The global with slug ${String(globalSlug)} can't be found. Count Global Versions Operation.`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$countGlobalVersions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["countGlobalVersionsOperation"])({
        disableErrors,
        global,
        overrideAccess,
        req: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLocalReq"])(options, payload),
        where
    });
} //# sourceMappingURL=countVersions.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/findOne.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findOneOperation",
    ()=>findOneOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/auth/executeAccess.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/NotFound.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/fields/hooks/afterRead/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$locked$2d$documents$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/locked-documents/config.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getSelectMode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/getSelectMode.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/getVersionsConfig.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/killTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/sanitizeSelect.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$replaceWithDraftIfAvailable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/drafts/replaceWithDraftIfAvailable.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
const findOneOperation = async (args)=>{
    const { slug, depth, draft: replaceWithVersion = false, flattenLocales, globalConfig, includeLockStatus: includeLockStatusFromArgs, overrideAccess = false, populate, req: { fallbackLocale, locale }, req, select: incomingSelect, showHiddenFields } = args;
    const includeLockStatus = includeLockStatusFromArgs && req.payload.collections?.[__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$locked$2d$documents$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lockedDocumentsCollectionSlug"]];
    try {
        // /////////////////////////////////////
        // beforeOperation - Global
        // /////////////////////////////////////
        if (globalConfig.hooks?.beforeOperation?.length) {
            for (const hook of globalConfig.hooks.beforeOperation){
                args = await hook({
                    args,
                    context: args.req.context,
                    global: globalConfig,
                    operation: 'read',
                    overrideAccess,
                    req: args.req
                }) || args;
            }
        }
        // /////////////////////////////////////
        // Retrieve and execute access
        // /////////////////////////////////////
        let accessResult;
        if (!overrideAccess) {
            accessResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["executeAccess"])({
                req
            }, globalConfig.access.read);
        }
        if (accessResult === false) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NotFound"](req.t);
        }
        const select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeSelect"])({
            fields: globalConfig.flattenedFields,
            forceSelect: globalConfig.forceSelect,
            select: incomingSelect
        });
        // /////////////////////////////////////
        // Perform database operation
        // /////////////////////////////////////
        let dbSelect = select;
        if (globalConfig.versions?.drafts && replaceWithVersion && select && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getSelectMode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSelectMode"])(select) === 'include') {
            dbSelect = {
                ...select,
                createdAt: true,
                updatedAt: true
            };
        }
        const docFromDB = await req.payload.db.findGlobal({
            slug,
            locale: locale,
            req,
            select: dbSelect,
            where: overrideAccess ? undefined : accessResult
        });
        // Check if no document was returned (Postgres returns {} instead of null)
        const hasDoc = docFromDB && Object.keys(docFromDB).length > 0;
        if (!hasDoc && !args.data && !overrideAccess && accessResult !== true) {
            return {};
        }
        let doc = args.data ?? (hasDoc ? docFromDB : null) ?? {};
        // /////////////////////////////////////
        // Include Lock Status if required
        // /////////////////////////////////////
        if (includeLockStatus && slug) {
            let lockStatus = null;
            try {
                const lockDocumentsProp = globalConfig?.lockDocuments;
                const lockDurationDefault = 300 // Default 5 minutes in seconds
                ;
                const lockDuration = typeof lockDocumentsProp === 'object' ? lockDocumentsProp.duration : lockDurationDefault;
                const lockDurationInMilliseconds = lockDuration * 1000;
                const lockedDocument = await req.payload.find({
                    collection: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$locked$2d$documents$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lockedDocumentsCollectionSlug"],
                    depth: 1,
                    limit: 1,
                    overrideAccess: false,
                    pagination: false,
                    req,
                    where: {
                        and: [
                            {
                                globalSlug: {
                                    equals: slug
                                }
                            },
                            {
                                updatedAt: {
                                    greater_than: new Date(new Date().getTime() - lockDurationInMilliseconds)
                                }
                            }
                        ]
                    }
                });
                if (lockedDocument && lockedDocument.docs.length > 0) {
                    lockStatus = lockedDocument.docs[0];
                }
            } catch  {
            // swallow error
            }
            doc._isLocked = !!lockStatus;
            doc._userEditing = lockStatus?.user?.value ?? null;
        }
        // /////////////////////////////////////
        // Replace document with draft if available
        // /////////////////////////////////////
        if (replaceWithVersion && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasDraftsEnabled"])(globalConfig)) {
            doc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$replaceWithDraftIfAvailable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["replaceWithDraftIfAvailable"])({
                accessResult,
                doc,
                entity: globalConfig,
                entityType: 'global',
                overrideAccess,
                req,
                select
            });
        }
        // /////////////////////////////////////
        // Execute before global hook
        // /////////////////////////////////////
        if (globalConfig.hooks?.beforeRead?.length) {
            for (const hook of globalConfig.hooks.beforeRead){
                doc = await hook({
                    context: req.context,
                    doc,
                    global: globalConfig,
                    overrideAccess,
                    req
                }) || doc;
            }
        }
        // /////////////////////////////////////
        // Execute globalType field if not selected
        // /////////////////////////////////////
        if (select && doc.globalType) {
            const selectMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getSelectMode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSelectMode"])(select);
            if (selectMode === 'include' && !select['globalType'] || selectMode === 'exclude' && select['globalType'] === false) {
                delete doc['globalType'];
            }
        }
        // /////////////////////////////////////
        // Execute field-level hooks and access
        // /////////////////////////////////////
        doc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["afterRead"])({
            collection: null,
            context: req.context,
            depth: depth,
            doc,
            draft: replaceWithVersion,
            fallbackLocale: fallbackLocale,
            flattenLocales,
            global: globalConfig,
            locale: locale,
            overrideAccess,
            populate,
            req,
            select,
            showHiddenFields: showHiddenFields
        });
        // /////////////////////////////////////
        // Execute after global hook
        // /////////////////////////////////////
        if (globalConfig.hooks?.afterRead?.length) {
            for (const hook of globalConfig.hooks.afterRead){
                doc = await hook({
                    context: req.context,
                    doc,
                    global: globalConfig,
                    overrideAccess,
                    req
                }) || doc;
            }
        }
        // /////////////////////////////////////
        // Return results
        // /////////////////////////////////////
        return doc;
    } catch (error) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["killTransaction"])(req);
        throw error;
    }
}; //# sourceMappingURL=findOne.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/local/findOne.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findOneGlobalLocal",
    ()=>findOneGlobalLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/createLocalReq.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$findOne$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/findOne.js [app-rsc] (ecmascript)");
;
;
;
async function findOneGlobalLocal(payload, options) {
    const { slug: globalSlug, data, depth, draft = false, flattenLocales, includeLockStatus, overrideAccess = true, populate, select, showHiddenFields } = options;
    const globalConfig = payload.globals.config.find((config)=>config.slug === globalSlug);
    if (!globalConfig) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"](`The global with slug ${String(globalSlug)} can't be found.`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$findOne$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findOneOperation"])({
        slug: globalSlug,
        data,
        depth,
        draft,
        flattenLocales,
        globalConfig,
        includeLockStatus,
        overrideAccess,
        populate,
        req: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLocalReq"])(options, payload),
        select,
        showHiddenFields
    });
} //# sourceMappingURL=findOne.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/findVersionByID.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findVersionByIDOperation",
    ()=>findVersionByIDOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/auth/executeAccess.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/combineQueries.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/Forbidden.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/NotFound.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/fields/hooks/afterRead/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/deepCopyObject.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/killTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/sanitizeSelect.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildGlobalFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/buildGlobalFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSelect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/drafts/getQueryDraftsSelect.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
const findVersionByIDOperation = async (args)=>{
    const { id, currentDepth, depth, disableErrors, globalConfig, overrideAccess, populate, req: { fallbackLocale, locale, payload }, req, select: incomingSelect, showHiddenFields } = args;
    try {
        // /////////////////////////////////////
        // Access
        // /////////////////////////////////////
        const accessResults = !overrideAccess ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["executeAccess"])({
            id,
            disableErrors,
            req
        }, globalConfig.access.readVersions) : true;
        // If errors are disabled, and access returns false, return null
        if (accessResults === false) {
            return null;
        }
        const hasWhereAccess = typeof accessResults === 'object';
        const select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeSelect"])({
            fields: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildGlobalFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildVersionGlobalFields"])(payload.config, globalConfig, true),
            forceSelect: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSelect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getQueryDraftsSelect"])({
                select: globalConfig.forceSelect
            }),
            select: incomingSelect,
            versions: true
        });
        const findGlobalVersionsArgs = {
            global: globalConfig.slug,
            limit: 1,
            locale: locale,
            req,
            select,
            where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["combineQueries"])({
                id: {
                    equals: id
                }
            }, accessResults)
        };
        // /////////////////////////////////////
        // Find by ID
        // /////////////////////////////////////
        if (!findGlobalVersionsArgs.where?.and?.[0]?.id) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NotFound"](req.t);
        }
        const { docs: results } = await payload.db.findGlobalVersions(findGlobalVersionsArgs);
        if (!results || results?.length === 0) {
            if (!disableErrors) {
                if (!hasWhereAccess) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NotFound"](req.t);
                }
                if (hasWhereAccess) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Forbidden"](req.t);
                }
            }
            return null;
        }
        // Clone the result - it may have come back memoized
        let result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(results[0]);
        if (!result.version) {
            result.version = {};
        }
        // Patch globalType onto version doc
        result.version.globalType = globalConfig.slug;
        // /////////////////////////////////////
        // beforeRead - Collection
        // /////////////////////////////////////
        if (globalConfig.hooks?.beforeRead?.length) {
            for (const hook of globalConfig.hooks.beforeRead){
                result = await hook({
                    context: req.context,
                    doc: result.version,
                    global: globalConfig,
                    overrideAccess,
                    req
                }) || result.version;
            }
        }
        // /////////////////////////////////////
        // afterRead - Fields
        // /////////////////////////////////////
        result.version = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["afterRead"])({
            collection: null,
            context: req.context,
            currentDepth,
            depth: depth,
            doc: result.version,
            draft: undefined,
            fallbackLocale: fallbackLocale,
            global: globalConfig,
            locale: locale,
            overrideAccess: overrideAccess,
            populate,
            req,
            select: typeof select?.version === 'object' ? select.version : undefined,
            showHiddenFields: showHiddenFields
        });
        // /////////////////////////////////////
        // afterRead - Global
        // /////////////////////////////////////
        if (globalConfig.hooks?.afterRead?.length) {
            for (const hook of globalConfig.hooks.afterRead){
                result.version = await hook({
                    context: req.context,
                    doc: result.version,
                    global: globalConfig,
                    overrideAccess,
                    query: findGlobalVersionsArgs.where,
                    req
                }) || result.version;
            }
        }
        return result;
    } catch (error) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["killTransaction"])(req);
        throw error;
    }
}; //# sourceMappingURL=findVersionByID.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/local/findVersionByID.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findGlobalVersionByIDLocal",
    ()=>findGlobalVersionByIDLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/createLocalReq.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$findVersionByID$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/findVersionByID.js [app-rsc] (ecmascript)");
;
;
;
async function findGlobalVersionByIDLocal(payload, options) {
    const { id, slug: globalSlug, depth, disableErrors = false, overrideAccess = true, populate, select, showHiddenFields } = options;
    const globalConfig = payload.globals.config.find((config)=>config.slug === globalSlug);
    if (!globalConfig) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"](`The global with slug ${String(globalSlug)} can't be found.`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$findVersionByID$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findVersionByIDOperation"])({
        id,
        depth,
        disableErrors,
        globalConfig,
        overrideAccess,
        populate,
        req: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLocalReq"])(options, payload),
        select,
        showHiddenFields
    });
} //# sourceMappingURL=findVersionByID.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/findVersions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findVersionsOperation",
    ()=>findVersionsOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/auth/executeAccess.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/combineQueries.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/database/queryValidation/validateQueryPaths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/fields/hooks/afterRead/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/killTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeInternalFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/sanitizeInternalFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/sanitizeSelect.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildGlobalFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/buildGlobalFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSelect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/drafts/getQueryDraftsSelect.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
const findVersionsOperation = async (args)=>{
    const { depth, globalConfig, limit, overrideAccess, page, pagination = true, populate, select: incomingSelect, showHiddenFields, sort, where } = args;
    const req = args.req;
    const { fallbackLocale, locale, payload } = req;
    const versionFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildGlobalFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildVersionGlobalFields"])(payload.config, globalConfig, true);
    try {
        // /////////////////////////////////////
        // Access
        // /////////////////////////////////////
        const accessResults = !overrideAccess ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["executeAccess"])({
            req
        }, globalConfig.access.readVersions) : true;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateQueryPaths"])({
            globalConfig,
            overrideAccess: overrideAccess,
            req,
            versionFields,
            where: where
        });
        const fullWhere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["combineQueries"])(where, accessResults);
        const select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeSelect"])({
            fields: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildGlobalFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildVersionGlobalFields"])(payload.config, globalConfig, true),
            forceSelect: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSelect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getQueryDraftsSelect"])({
                select: globalConfig.forceSelect
            }),
            select: incomingSelect,
            versions: true
        });
        // /////////////////////////////////////
        // Find
        // /////////////////////////////////////
        const usePagination = pagination && limit !== 0;
        const sanitizedLimit = limit ?? (usePagination ? 10 : 0);
        const sanitizedPage = page || 1;
        const paginatedDocs = await payload.db.findGlobalVersions({
            global: globalConfig.slug,
            limit: sanitizedLimit,
            locale: locale,
            page: sanitizedPage,
            pagination,
            req,
            select,
            sort,
            where: fullWhere
        });
        // /////////////////////////////////////
        // afterRead - Fields
        // /////////////////////////////////////
        let result = {
            ...paginatedDocs,
            docs: await Promise.all(paginatedDocs.docs.map(async (data)=>{
                if (!data.version) {
                    // Fallback if not selected
                    ;
                    data.version = {};
                }
                return {
                    ...data,
                    version: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["afterRead"])({
                        collection: null,
                        context: req.context,
                        depth: depth,
                        doc: {
                            ...data.version,
                            // Patch globalType onto version doc
                            globalType: globalConfig.slug
                        },
                        draft: undefined,
                        fallbackLocale: fallbackLocale,
                        findMany: true,
                        global: globalConfig,
                        locale: locale,
                        overrideAccess: overrideAccess,
                        populate,
                        req,
                        select,
                        showHiddenFields: showHiddenFields
                    })
                };
            }))
        };
        // /////////////////////////////////////
        // afterRead - Global
        // /////////////////////////////////////
        if (globalConfig.hooks?.afterRead?.length) {
            result.docs = await Promise.all(result.docs.map(async (doc)=>{
                const docRef = doc;
                for (const hook of globalConfig.hooks.afterRead){
                    docRef.version = await hook({
                        context: req.context,
                        doc: doc.version,
                        findMany: true,
                        global: globalConfig,
                        overrideAccess,
                        query: fullWhere,
                        req
                    }) || doc.version;
                }
                return docRef;
            }));
        }
        // /////////////////////////////////////
        // Return results
        // /////////////////////////////////////
        result = {
            ...result,
            docs: result.docs.map((doc)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeInternalFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeInternalFields"])(doc))
        };
        return result;
    } catch (error) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["killTransaction"])(req);
        throw error;
    }
}; //# sourceMappingURL=findVersions.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/local/findVersions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findGlobalVersionsLocal",
    ()=>findGlobalVersionsLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/createLocalReq.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$findVersions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/findVersions.js [app-rsc] (ecmascript)");
;
;
;
async function findGlobalVersionsLocal(payload, options) {
    const { slug: globalSlug, depth, limit, overrideAccess = true, page, pagination = true, populate, select, showHiddenFields, sort, where } = options;
    const globalConfig = payload.globals.config.find((config)=>config.slug === globalSlug);
    if (!globalConfig) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"](`The global with slug ${String(globalSlug)} can't be found.`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$findVersions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findVersionsOperation"])({
        depth,
        globalConfig,
        limit,
        overrideAccess,
        page,
        pagination,
        populate,
        req: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLocalReq"])(options, payload),
        select,
        showHiddenFields,
        sort,
        where
    });
} //# sourceMappingURL=findVersions.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/restoreVersion.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "restoreVersionOperation",
    ()=>restoreVersionOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/auth/executeAccess.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/NotFound.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/fields/hooks/afterChange/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/fields/hooks/afterRead/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/commitTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/initTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/killTransaction.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const restoreVersionOperation = async (args)=>{
    const { id, depth, draft, globalConfig, overrideAccess, populate, showHiddenFields } = args;
    const req = args.req;
    const { fallbackLocale, locale, payload } = req;
    try {
        const shouldCommit = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initTransaction"])(req);
        // /////////////////////////////////////
        // beforeOperation - Global
        // /////////////////////////////////////
        if (globalConfig.hooks?.beforeOperation?.length) {
            for (const hook of globalConfig.hooks.beforeOperation){
                args = await hook({
                    args,
                    context: req.context,
                    global: globalConfig,
                    operation: 'restoreVersion',
                    overrideAccess,
                    req
                }) || args;
            }
        }
        // /////////////////////////////////////
        // Access
        // /////////////////////////////////////
        if (!overrideAccess) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["executeAccess"])({
                req
            }, globalConfig.access.update);
        }
        // /////////////////////////////////////
        // Retrieve original raw version
        // /////////////////////////////////////
        const { docs: versionDocs } = await payload.db.findGlobalVersions({
            global: globalConfig.slug,
            limit: 1,
            req,
            where: {
                id: {
                    equals: id
                }
            }
        });
        if (!versionDocs || versionDocs.length === 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NotFound"](req.t);
        }
        const rawVersion = versionDocs[0];
        // Patch globalType onto version doc
        rawVersion.version.globalType = globalConfig.slug;
        // Overwrite draft status if draft is true
        if (draft) {
            rawVersion.version._status = 'draft';
        }
        // /////////////////////////////////////
        // fetch previousDoc
        // /////////////////////////////////////
        const previousDoc = await payload.findGlobal({
            slug: globalConfig.slug,
            depth,
            req
        });
        // /////////////////////////////////////
        // Update global
        // /////////////////////////////////////
        const global = await payload.db.findGlobal({
            slug: globalConfig.slug,
            req
        });
        let result = rawVersion.version;
        if (global) {
            // Ensure updatedAt date is always updated
            result.updatedAt = new Date().toISOString();
            result = await payload.db.updateGlobal({
                slug: globalConfig.slug,
                data: result,
                req
            });
            const now = new Date().toISOString();
            result = await payload.db.createGlobalVersion({
                autosave: false,
                createdAt: result.createdAt ? new Date(result.createdAt).toISOString() : now,
                globalSlug: globalConfig.slug,
                req,
                updatedAt: draft ? now : new Date(result.updatedAt).toISOString(),
                versionData: result
            });
        } else {
            result = await payload.db.createGlobal({
                slug: globalConfig.slug,
                data: result,
                req
            });
        }
        // /////////////////////////////////////
        // afterRead - Fields
        // /////////////////////////////////////
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["afterRead"])({
            collection: null,
            context: req.context,
            depth: depth,
            doc: result,
            draft: undefined,
            fallbackLocale: fallbackLocale,
            global: globalConfig,
            locale: locale,
            overrideAccess: overrideAccess,
            populate,
            req,
            showHiddenFields: showHiddenFields
        });
        // /////////////////////////////////////
        // afterRead - Global
        // /////////////////////////////////////
        if (globalConfig.hooks?.afterRead?.length) {
            for (const hook of globalConfig.hooks.afterRead){
                result = await hook({
                    context: req.context,
                    doc: result,
                    global: globalConfig,
                    overrideAccess,
                    req
                }) || result;
            }
        }
        // /////////////////////////////////////
        // afterChange - Fields
        // /////////////////////////////////////
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["afterChange"])({
            collection: null,
            context: req.context,
            data: result,
            doc: result,
            global: globalConfig,
            operation: 'update',
            previousDoc,
            req
        });
        // /////////////////////////////////////
        // afterChange - Global
        // /////////////////////////////////////
        if (globalConfig.hooks?.afterChange?.length) {
            for (const hook of globalConfig.hooks.afterChange){
                result = await hook({
                    context: req.context,
                    data: result,
                    doc: result,
                    global: globalConfig,
                    overrideAccess,
                    previousDoc,
                    req
                }) || result;
            }
        }
        if (shouldCommit) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["commitTransaction"])(req);
        }
        return result;
    } catch (error) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["killTransaction"])(req);
        throw error;
    }
}; //# sourceMappingURL=restoreVersion.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/local/restoreVersion.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "restoreGlobalVersionLocal",
    ()=>restoreGlobalVersionLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/createLocalReq.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$restoreVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/restoreVersion.js [app-rsc] (ecmascript)");
;
;
;
async function restoreGlobalVersionLocal(payload, options) {
    const { id, slug: globalSlug, depth, overrideAccess = true, populate, showHiddenFields } = options;
    const globalConfig = payload.globals.config.find((config)=>config.slug === globalSlug);
    if (!globalConfig) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"](`The global with slug ${String(globalSlug)} can't be found.`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$restoreVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["restoreVersionOperation"])({
        id,
        depth,
        globalConfig,
        overrideAccess,
        populate,
        req: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLocalReq"])(options, payload),
        showHiddenFields
    });
} //# sourceMappingURL=restoreVersion.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/update.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateOperation",
    ()=>updateOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/auth/executeAccess.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/fields/hooks/afterChange/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/fields/hooks/afterRead/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/fields/hooks/beforeChange/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/fields/hooks/beforeValidate/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/deepCopyObject.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$checkDocumentLockStatus$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/checkDocumentLockStatus.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/commitTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getSelectMode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/getSelectMode.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/getVersionsConfig.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/initTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/killTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$mergeLocalizedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/mergeLocalizedData.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/sanitizeSelect.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$getLatestGlobalVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/getLatestGlobalVersion.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$saveVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/saveVersion.js [app-rsc] (ecmascript)");
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
const updateOperation = async (args)=>{
    if (args.publishSpecificLocale) {
        args.req.locale = args.publishSpecificLocale;
    }
    const { slug, autosave, depth, disableTransaction, draft: draftArg, globalConfig, overrideAccess, overrideLock, populate, publishAllLocales: publishAllLocalesArg, publishSpecificLocale, req: { fallbackLocale, locale, payload, payload: { config } = {} }, req, select: incomingSelect, showHiddenFields, unpublishAllLocales: unpublishAllLocalesArg } = args;
    try {
        const shouldCommit = !disableTransaction && await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initTransaction"])(req);
        // /////////////////////////////////////
        // beforeOperation - Global
        // /////////////////////////////////////
        if (globalConfig.hooks?.beforeOperation?.length) {
            for (const hook of globalConfig.hooks.beforeOperation){
                args = await hook({
                    args,
                    context: args.req.context,
                    global: globalConfig,
                    operation: 'update',
                    overrideAccess,
                    req: args.req
                }) || args;
            }
        }
        let { data } = args;
        const publishAllLocales = !draftArg && (publishAllLocalesArg ?? ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasLocalizeStatusEnabled"])(globalConfig) ? false : true));
        const unpublishAllLocales = typeof unpublishAllLocalesArg === 'string' ? unpublishAllLocalesArg === 'true' : !!unpublishAllLocalesArg;
        const isSavingDraft = Boolean(draftArg && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasDraftsEnabled"])(globalConfig)) && data._status !== 'published' && !publishAllLocales;
        if (isSavingDraft) {
            data._status = 'draft';
        }
        // /////////////////////////////////////
        // 1. Retrieve and execute access
        // /////////////////////////////////////
        const accessResults = !overrideAccess ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["executeAccess"])({
            data,
            req
        }, globalConfig.access.update) : true;
        // /////////////////////////////////////
        // Retrieve document
        // /////////////////////////////////////
        const query = overrideAccess ? undefined : accessResults;
        // /////////////////////////////////////
        // 2. Retrieve document
        // /////////////////////////////////////
        const globalVersionResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$getLatestGlobalVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLatestGlobalVersion"])({
            slug,
            config: globalConfig,
            locale: locale,
            payload,
            req,
            where: query
        });
        const { global, globalExists } = globalVersionResult || {};
        let globalJSON = {};
        if (globalVersionResult && globalVersionResult.global) {
            globalJSON = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(global);
            if (globalJSON._id) {
                delete globalJSON._id;
            }
        }
        const originalDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["afterRead"])({
            collection: null,
            context: req.context,
            depth: 0,
            doc: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(globalJSON),
            draft: draftArg,
            fallbackLocale: fallbackLocale,
            global: globalConfig,
            locale: locale,
            overrideAccess: true,
            req,
            showHiddenFields: showHiddenFields
        });
        // ///////////////////////////////////////////
        // Handle potentially locked global documents
        // ///////////////////////////////////////////
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$checkDocumentLockStatus$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkDocumentLockStatus"])({
            globalSlug: slug,
            lockErrorMessage: `Global with slug "${slug}" is currently locked by another user and cannot be updated.`,
            overrideLock,
            req
        });
        // /////////////////////////////////////
        // beforeValidate - Fields
        // /////////////////////////////////////
        data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["beforeValidate"])({
            collection: null,
            context: req.context,
            data,
            doc: originalDoc,
            global: globalConfig,
            operation: 'update',
            overrideAccess: overrideAccess,
            req
        });
        // /////////////////////////////////////
        // beforeValidate - Global
        // /////////////////////////////////////
        if (globalConfig.hooks?.beforeValidate?.length) {
            for (const hook of globalConfig.hooks.beforeValidate){
                data = await hook({
                    context: req.context,
                    data,
                    global: globalConfig,
                    originalDoc,
                    overrideAccess,
                    req
                }) || data;
            }
        }
        // /////////////////////////////////////
        // beforeChange - Global
        // /////////////////////////////////////
        if (globalConfig.hooks?.beforeChange?.length) {
            for (const hook of globalConfig.hooks.beforeChange){
                data = await hook({
                    context: req.context,
                    data,
                    global: globalConfig,
                    originalDoc,
                    overrideAccess,
                    req
                }) || data;
            }
        }
        // /////////////////////////////////////
        // beforeChange - Fields
        // /////////////////////////////////////
        const beforeChangeArgs = {
            collection: null,
            context: req.context,
            data,
            doc: originalDoc,
            docWithLocales: globalJSON,
            global: globalConfig,
            operation: 'update',
            req,
            skipValidation: isSavingDraft && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasDraftValidationEnabled"])(globalConfig)
        };
        let result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["beforeChange"])(beforeChangeArgs);
        let snapshotToSave;
        // /////////////////////////////////////
        // Handle Localized Data Merging
        // /////////////////////////////////////
        if (config && config.localization && globalConfig.versions) {
            let currentGlobal = null;
            let snapshotData;
            if (globalConfig.versions.drafts && globalConfig.versions.drafts.localizeStatus) {
                if (publishAllLocales || unpublishAllLocales) {
                    let accessibleLocaleCodes = config.localization.localeCodes;
                    if (config.localization.filterAvailableLocales) {
                        const filteredLocales = await config.localization.filterAvailableLocales({
                            locales: config.localization.locales,
                            req
                        });
                        accessibleLocaleCodes = filteredLocales.map((locale)=>typeof locale === 'string' ? locale : locale.code);
                    }
                    if (typeof result._status !== 'object' || result._status === null) {
                        result._status = {};
                    }
                    for (const localeCode of accessibleLocaleCodes){
                        result._status[localeCode] = unpublishAllLocales ? 'draft' : 'published';
                    }
                } else if (!isSavingDraft) {
                    // publishing a single locale
                    currentGlobal = await payload.db.findGlobal({
                        slug: globalConfig.slug,
                        req,
                        where: query
                    });
                    snapshotData = result;
                }
            } else if (publishSpecificLocale) {
                // previous way of publishing a single locale
                currentGlobal = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$getLatestGlobalVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLatestGlobalVersion"])({
                    slug,
                    config: globalConfig,
                    payload,
                    published: true,
                    req,
                    where: query
                })).global;
                snapshotData = {
                    ...result,
                    _status: 'draft'
                };
            }
            if (snapshotData) {
                snapshotToSave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(snapshotData);
                result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$mergeLocalizedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeLocalizedData"])({
                    configBlockReferences: config.blocks,
                    dataWithLocales: result || {},
                    docWithLocales: currentGlobal || {},
                    fields: globalConfig.fields,
                    selectedLocales: [
                        locale
                    ]
                });
            }
        }
        // /////////////////////////////////////
        // Update
        // /////////////////////////////////////
        const select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeSelect"])({
            fields: globalConfig.flattenedFields,
            forceSelect: globalConfig.forceSelect,
            select: incomingSelect
        });
        if (!isSavingDraft) {
            const now = new Date().toISOString();
            // Ensure global has createdAt
            if (!result.createdAt) {
                result.createdAt = now;
            }
            // Ensure updatedAt date is always updated
            result.updatedAt = now;
            if (globalExists) {
                result = await payload.db.updateGlobal({
                    slug,
                    data: result,
                    req,
                    select
                });
            } else {
                result = await payload.db.createGlobal({
                    slug,
                    data: result,
                    req
                });
            }
        }
        // /////////////////////////////////////
        // Create version
        // /////////////////////////////////////
        if (globalConfig.versions) {
            const { globalType } = result;
            result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$saveVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveVersion"])({
                autosave,
                docWithLocales: result,
                draft: isSavingDraft,
                global: globalConfig,
                operation: 'update',
                payload,
                publishSpecificLocale,
                req,
                select,
                snapshot: snapshotToSave
            });
            result = {
                ...result,
                globalType
            };
        }
        // /////////////////////////////////////
        // Execute globalType field if not selected
        // /////////////////////////////////////
        if (select && result.globalType) {
            const selectMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getSelectMode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSelectMode"])(select);
            if (selectMode === 'include' && !select['globalType'] || selectMode === 'exclude' && select['globalType'] === false) {
                delete result['globalType'];
            }
        }
        // /////////////////////////////////////
        // afterRead - Fields
        // /////////////////////////////////////
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["afterRead"])({
            collection: null,
            context: req.context,
            depth: depth,
            doc: result,
            draft: draftArg,
            fallbackLocale: null,
            global: globalConfig,
            locale: locale,
            overrideAccess: overrideAccess,
            populate,
            req,
            select,
            showHiddenFields: showHiddenFields
        });
        // /////////////////////////////////////
        // afterRead - Global
        // /////////////////////////////////////
        if (globalConfig.hooks?.afterRead?.length) {
            for (const hook of globalConfig.hooks.afterRead){
                result = await hook({
                    context: req.context,
                    doc: result,
                    global: globalConfig,
                    overrideAccess,
                    req
                }) || result;
            }
        }
        // /////////////////////////////////////
        // afterChange - Fields
        // /////////////////////////////////////
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["afterChange"])({
            collection: null,
            context: req.context,
            data,
            doc: result,
            global: globalConfig,
            operation: 'update',
            previousDoc: originalDoc,
            req
        });
        // /////////////////////////////////////
        // afterChange - Global
        // /////////////////////////////////////
        if (globalConfig.hooks?.afterChange?.length) {
            for (const hook of globalConfig.hooks.afterChange){
                result = await hook({
                    context: req.context,
                    data,
                    doc: result,
                    global: globalConfig,
                    overrideAccess,
                    previousDoc: originalDoc,
                    req
                }) || result;
            }
        }
        // /////////////////////////////////////
        // Return results
        // /////////////////////////////////////
        if (shouldCommit) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["commitTransaction"])(req);
        }
        return result;
    } catch (error) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["killTransaction"])(req);
        throw error;
    }
}; //# sourceMappingURL=update.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/local/update.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateGlobalLocal",
    ()=>updateGlobalLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/deepCopyObject.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/createLocalReq.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$update$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/update.js [app-rsc] (ecmascript)");
;
;
;
;
async function updateGlobalLocal(payload, options) {
    const { slug: globalSlug, data, depth, draft, overrideAccess = true, overrideLock, populate, publishAllLocales, publishSpecificLocale, select, showHiddenFields, unpublishAllLocales } = options;
    const globalConfig = payload.globals.config.find((config)=>config.slug === globalSlug);
    if (!globalConfig) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"](`The global with slug ${String(globalSlug)} can't be found.`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$update$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateOperation"])({
        slug: globalSlug,
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(data),
        depth,
        draft,
        globalConfig,
        overrideAccess,
        overrideLock,
        populate,
        publishAllLocales,
        publishSpecificLocale: publishSpecificLocale,
        req: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLocalReq"])(options, payload),
        select,
        showHiddenFields,
        unpublishAllLocales
    });
} //# sourceMappingURL=update.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/docAccess.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "docAccessOperation",
    ()=>docAccessOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getEntityPermissions$2f$getEntityPermissions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/getEntityPermissions/getEntityPermissions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/killTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizePermissions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/sanitizePermissions.js [app-rsc] (ecmascript)");
;
;
;
const docAccessOperation = async (args)=>{
    const { data, globalConfig, req } = args;
    const globalOperations = [
        'read',
        'update'
    ];
    if (globalConfig.versions) {
        globalOperations.push('readVersions');
    }
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getEntityPermissions$2f$getEntityPermissions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEntityPermissions"])({
            id: undefined,
            blockReferencesPermissions: {},
            data,
            entity: globalConfig,
            entityType: 'global',
            fetchData: true,
            operations: globalOperations,
            req
        });
        const sanitizedPermissions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizePermissions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizePermissions"])({
            globals: {
                [globalConfig.slug]: result
            }
        });
        const globalPermissions = sanitizedPermissions?.globals?.[globalConfig.slug];
        return globalPermissions ?? {
            fields: {}
        };
    } catch (e) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["killTransaction"])(req);
        throw e;
    }
}; //# sourceMappingURL=docAccess.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/endpoints/docAccess.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "docAccessHandler",
    ()=>docAccessHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-rsc] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getRequestEntity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/getRequestEntity.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$headersWithCors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/headersWithCors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$docAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/docAccess.js [app-rsc] (ecmascript)");
;
;
;
;
const docAccessHandler = async (req)=>{
    const globalConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getRequestEntity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestGlobal"])(req);
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$docAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["docAccessOperation"])({
        data: req.data,
        globalConfig,
        req
    });
    return Response.json(result, {
        headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$headersWithCors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headersWithCors"])({
            headers: new Headers(),
            req
        }),
        status: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].OK
    });
}; //# sourceMappingURL=docAccess.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/endpoints/findOne.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findOneHandler",
    ()=>findOneHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-rsc] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getRequestEntity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/getRequestEntity.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$headersWithCors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/headersWithCors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/isNumber.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizePopulateParam$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/sanitizePopulateParam.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelectParam$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/sanitizeSelectParam.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$findOne$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/findOne.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const findOneHandler = async (req)=>{
    const globalConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getRequestEntity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestGlobal"])(req);
    const { data, searchParams } = req;
    const depth = data ? data.depth : searchParams.get('depth');
    const flattenLocales = data ? data.flattenLocales : searchParams.has('flattenLocales') ? searchParams.get('flattenLocales') === 'true' : undefined;
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$findOne$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findOneOperation"])({
        slug: globalConfig.slug,
        data: data ? data?.data : searchParams.get('data') ? JSON.parse(searchParams.get('data')) : undefined,
        depth: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNumber"])(depth) ? Number(depth) : undefined,
        draft: data ? data.draft : searchParams.get('draft') === 'true',
        flattenLocales,
        globalConfig,
        populate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizePopulateParam$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizePopulateParam"])(req.query.populate),
        req,
        select: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelectParam$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeSelectParam"])(req.query.select)
    });
    return Response.json(result, {
        headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$headersWithCors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headersWithCors"])({
            headers: new Headers(),
            req
        }),
        status: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].OK
    });
}; //# sourceMappingURL=findOne.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/endpoints/findVersionByID.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findVersionByIDHandler",
    ()=>findVersionByIDHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-rsc] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getRequestEntity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/getRequestEntity.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$headersWithCors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/headersWithCors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/isNumber.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizePopulateParam$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/sanitizePopulateParam.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelectParam$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/sanitizeSelectParam.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$findVersionByID$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/findVersionByID.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const findVersionByIDHandler = async (req)=>{
    const globalConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getRequestEntity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestGlobal"])(req);
    const { searchParams } = req;
    const depth = searchParams.get('depth');
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$findVersionByID$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findVersionByIDOperation"])({
        id: req.routeParams.id,
        depth: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNumber"])(depth) ? Number(depth) : undefined,
        globalConfig,
        populate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizePopulateParam$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizePopulateParam"])(req.query.populate),
        req,
        select: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelectParam$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeSelectParam"])(req.query.select)
    });
    return Response.json(result, {
        headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$headersWithCors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headersWithCors"])({
            headers: new Headers(),
            req
        }),
        status: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].OK
    });
}; //# sourceMappingURL=findVersionByID.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/endpoints/findVersions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findVersionsHandler",
    ()=>findVersionsHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-rsc] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getRequestEntity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/getRequestEntity.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$headersWithCors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/headersWithCors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/isNumber.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizePopulateParam$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/sanitizePopulateParam.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelectParam$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/sanitizeSelectParam.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSortParams$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/sanitizeSortParams.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$findVersions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/findVersions.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const findVersionsHandler = async (req)=>{
    const globalConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getRequestEntity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestGlobal"])(req);
    const { depth, limit, page, pagination, populate, select, sort, where } = req.query;
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$findVersions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findVersionsOperation"])({
        depth: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNumber"])(depth) ? Number(depth) : undefined,
        globalConfig,
        limit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNumber"])(limit) ? Number(limit) : undefined,
        page: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNumber"])(page) ? Number(page) : undefined,
        pagination: pagination === 'false' ? false : undefined,
        populate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizePopulateParam$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizePopulateParam"])(populate),
        req,
        select: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelectParam$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeSelectParam"])(select),
        sort: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSortParams$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeSortParams"])(sort),
        where
    });
    return Response.json(result, {
        headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$headersWithCors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headersWithCors"])({
            headers: new Headers(),
            req
        }),
        status: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].OK
    });
}; //# sourceMappingURL=findVersions.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/restoreVersion.js [app-rsc] (ecmascript) <export restoreVersionOperation as restoreVersionOperationGlobal>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "restoreVersionOperationGlobal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$restoreVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["restoreVersionOperation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$restoreVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/restoreVersion.js [app-rsc] (ecmascript)");
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/endpoints/restoreVersion.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "restoreVersionHandler",
    ()=>restoreVersionHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-rsc] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$restoreVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__restoreVersionOperation__as__restoreVersionOperationGlobal$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/restoreVersion.js [app-rsc] (ecmascript) <export restoreVersionOperation as restoreVersionOperationGlobal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizePopulateParam$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/sanitizePopulateParam.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getRequestEntity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/getRequestEntity.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$headersWithCors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/headersWithCors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/isNumber.js [app-rsc] (ecmascript)");
;
;
;
;
;
const restoreVersionHandler = async (req)=>{
    const globalConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getRequestEntity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestGlobal"])(req);
    const { searchParams } = req;
    const depth = searchParams.get('depth');
    const draft = searchParams.get('draft');
    const doc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$restoreVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__restoreVersionOperation__as__restoreVersionOperationGlobal$3e$__["restoreVersionOperationGlobal"])({
        id: req.routeParams.id,
        depth: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNumber"])(depth) ? Number(depth) : undefined,
        draft: draft === 'true' ? true : undefined,
        globalConfig,
        populate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizePopulateParam$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizePopulateParam"])(req.query.populate),
        req
    });
    return Response.json({
        doc,
        message: req.t('version:restoredSuccessfully')
    }, {
        headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$headersWithCors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headersWithCors"])({
            headers: new Headers(),
            req
        }),
        status: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].OK
    });
}; //# sourceMappingURL=restoreVersion.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/endpoints/update.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateHandler",
    ()=>updateHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-rsc] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getRequestEntity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/getRequestEntity.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$headersWithCors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/headersWithCors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/isNumber.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizePopulateParam$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/sanitizePopulateParam.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelectParam$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/sanitizeSelectParam.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$update$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/operations/update.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const updateHandler = async (req)=>{
    const globalConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getRequestEntity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestGlobal"])(req);
    const { searchParams } = req;
    const depth = searchParams.get('depth');
    const draft = searchParams.get('draft') === 'true';
    const autosave = searchParams.get('autosave') === 'true';
    const publishSpecificLocale = req.query.publishSpecificLocale;
    const publishAllLocales = searchParams.get('publishAllLocales') === 'true';
    const unpublishAllLocales = searchParams.get('unpublishAllLocales') === 'true';
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$update$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateOperation"])({
        slug: globalConfig.slug,
        autosave,
        data: req.data,
        depth: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNumber"])(depth) ? Number(depth) : undefined,
        draft,
        globalConfig,
        populate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizePopulateParam$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizePopulateParam"])(req.query.populate),
        publishAllLocales,
        publishSpecificLocale,
        req,
        select: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelectParam$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeSelectParam"])(req.query.select),
        unpublishAllLocales
    });
    let message = req.t('general:updatedSuccessfully');
    if (draft) {
        message = req.t('version:draftSavedSuccessfully');
    }
    if (autosave) {
        message = req.t('version:autosavedSuccessfully');
    }
    return Response.json({
        message,
        result
    }, {
        headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$headersWithCors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headersWithCors"])({
            headers: new Headers(),
            req
        }),
        status: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].OK
    });
}; //# sourceMappingURL=update.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/endpoints/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultGlobalEndpoints",
    ()=>defaultGlobalEndpoints
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$wrapInternalEndpoints$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/wrapInternalEndpoints.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$endpoints$2f$docAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/endpoints/docAccess.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$endpoints$2f$findOne$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/endpoints/findOne.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$endpoints$2f$findVersionByID$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/endpoints/findVersionByID.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$endpoints$2f$findVersions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/endpoints/findVersions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$endpoints$2f$restoreVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/endpoints/restoreVersion.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$endpoints$2f$update$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/endpoints/update.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const defaultGlobalEndpoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$wrapInternalEndpoints$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wrapInternalEndpoints"])([
    {
        handler: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$endpoints$2f$docAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["docAccessHandler"],
        method: 'post',
        path: '/access'
    },
    {
        handler: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$endpoints$2f$findOne$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findOneHandler"],
        method: 'get',
        path: '/'
    },
    {
        handler: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$endpoints$2f$findVersionByID$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findVersionByIDHandler"],
        method: 'get',
        path: '/versions/:id'
    },
    {
        handler: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$endpoints$2f$findVersions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findVersionsHandler"],
        method: 'get',
        path: '/versions'
    },
    {
        handler: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$endpoints$2f$restoreVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["restoreVersionHandler"],
        method: 'post',
        path: '/versions/:id'
    },
    {
        handler: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$endpoints$2f$update$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateHandler"],
        method: 'post',
        path: '/'
    }
]); //# sourceMappingURL=index.js.map
}),
"[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/config/sanitize.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sanitizeGlobal",
    ()=>sanitizeGlobal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/auth/defaultAccess.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$sanitize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/fields/config/sanitize.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$mergeBaseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/fields/mergeBaseFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$flattenAllFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/flattenAllFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/formatLabels.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$traverseForLocalizedFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/utilities/traverseForLocalizedFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$baseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/baseFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$defaults$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/versions/defaults.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$endpoints$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/payload/dist/globals/endpoints/index.js [app-rsc] (ecmascript)");
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
const sanitizeGlobal = async (config, global, /**
   * If this property is set, RichText fields won't be sanitized immediately. Instead, they will be added to this array as promises
   * so that you can sanitize them together, after the config has been sanitized.
   */ richTextSanitizationPromises, _validRelationships)=>{
    if (global._sanitized) {
        return global;
    }
    global._sanitized = true;
    global.label = global.label || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toWords"])(global.slug);
    // /////////////////////////////////
    // Ensure that collection has required object structure
    // /////////////////////////////////
    global.endpoints = global.endpoints ?? [];
    if (!global.hooks) {
        global.hooks = {};
    }
    if (!global.access) {
        global.access = {};
    }
    if (!global.admin) {
        global.admin = {};
    }
    if (!global.access.read) {
        global.access.read = __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultAccess"];
    }
    if (!global.access.update) {
        global.access.update = __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultAccess"];
    }
    if (!global.hooks.beforeValidate) {
        global.hooks.beforeValidate = [];
    }
    if (!global.hooks.beforeChange) {
        global.hooks.beforeChange = [];
    }
    if (!global.hooks.afterChange) {
        global.hooks.afterChange = [];
    }
    if (!global.hooks.beforeRead) {
        global.hooks.beforeRead = [];
    }
    if (!global.hooks.afterRead) {
        global.hooks.afterRead = [];
    }
    // Sanitize fields
    const validRelationships = _validRelationships ?? config.collections?.map((c)=>c.slug) ?? [];
    global.fields = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$sanitize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeFields"])({
        config,
        fields: global.fields,
        globalConfig: global,
        parentIsLocalized: false,
        richTextSanitizationPromises,
        validRelationships
    });
    if (global.endpoints !== false) {
        if (!global.endpoints) {
            global.endpoints = [];
        }
        for (const endpoint of __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$endpoints$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultGlobalEndpoints"]){
            global.endpoints.push(endpoint);
        }
    }
    if (global.versions) {
        if (global.versions === true) {
            global.versions = {
                drafts: false,
                max: 100
            };
        }
        global.versions.max = typeof global.versions.max === 'number' ? global.versions.max : 100;
        if (global.versions.drafts) {
            if (global.versions.drafts === true) {
                global.versions.drafts = {
                    autosave: false,
                    validate: false
                };
            }
            const hasLocalizedFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$traverseForLocalizedFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseForLocalizedFields"])(global.fields);
            if (config.localization && hasLocalizedFields) {
                if (global.versions.drafts.localizeStatus === undefined) {
                    global.versions.drafts.localizeStatus = false;
                }
            }
            global.versions.drafts.localizeStatus = config.experimental?.localizeStatus ? global.versions.drafts.localizeStatus : false;
            if (global.versions.drafts.autosave === true) {
                global.versions.drafts.autosave = {
                    interval: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$defaults$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["versionDefaults"].autosaveInterval
                };
            }
            if (global.versions.drafts.validate === undefined) {
                global.versions.drafts.validate = false;
            }
            global.fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$mergeBaseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeBaseFields"])(global.fields, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$baseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["baseVersionFields"])({
                localized: global.versions.drafts.localizeStatus ?? false
            }));
        }
    }
    if (!global.custom) {
        global.custom = {};
    }
    // /////////////////////////////////
    // Sanitize fields
    // /////////////////////////////////
    let hasUpdatedAt = null;
    let hasCreatedAt = null;
    global.fields.some((field)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
            if (field.name === 'updatedAt') {
                hasUpdatedAt = true;
            }
            if (field.name === 'createdAt') {
                hasCreatedAt = true;
            }
        }
        return hasCreatedAt && hasUpdatedAt;
    });
    if (!hasUpdatedAt) {
        global.fields.push({
            name: 'updatedAt',
            type: 'date',
            admin: {
                disableBulkEdit: true,
                hidden: true
            },
            label: ({ t })=>t('general:updatedAt')
        });
    }
    if (!hasCreatedAt) {
        global.fields.push({
            name: 'createdAt',
            type: 'date',
            admin: {
                disableBulkEdit: true,
                hidden: true
            },
            label: ({ t })=>t('general:createdAt')
        });
    }
    ;
    global.flattenedFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$flattenAllFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["flattenAllFields"])({
        fields: global.fields
    });
    return global;
}; //# sourceMappingURL=sanitize.js.map
}),
];

//# sourceMappingURL=26d36_payload_dist_globals_f4679278._.js.map