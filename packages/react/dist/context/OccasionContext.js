"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OccasionProvider = OccasionProvider;
exports.useOccasionContext = useOccasionContext;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const core_1 = require("@automotive/core");
const OccasionContext = (0, react_1.createContext)(null);
const defaultFilters = {};
function OccasionProvider({ children, occasions, }) {
    const filterService = (0, react_1.useMemo)(() => new core_1.FilterService(), []);
    const [filters, setFilters] = (0, react_1.useState)(defaultFilters);
    const filteredOccasions = (0, react_1.useMemo)(() => filterService.filterOccasions(occasions, filters), [occasions, filters, filterService]);
    const resetFilters = () => setFilters(defaultFilters);
    const value = (0, react_1.useMemo)(() => ({
        occasions,
        filteredOccasions,
        filters,
        setFilters,
        resetFilters,
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [occasions, filteredOccasions, filters]);
    return ((0, jsx_runtime_1.jsx)(OccasionContext.Provider, { value: value, children: children }));
}
function useOccasionContext() {
    const context = (0, react_1.useContext)(OccasionContext);
    if (!context) {
        throw new Error("useOccasionContext must be used within an OccasionProvider");
    }
    return context;
}
//# sourceMappingURL=OccasionContext.js.map