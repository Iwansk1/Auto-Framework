import { ComparisonResult, ScoringStrategy } from "@automotive/core";
interface ComparisonTableProps {
    result: ComparisonResult;
    availableStrategies: ScoringStrategy[];
    onStrategyChange: (strategy: ScoringStrategy) => void;
    className?: string;
    headerClassName?: string;
    rowClassName?: string;
    scoreClassName?: string;
}
export declare function ComparisonTable({ result, availableStrategies, onStrategyChange, className, headerClassName, rowClassName, scoreClassName, }: ComparisonTableProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ComparisonTable.d.ts.map