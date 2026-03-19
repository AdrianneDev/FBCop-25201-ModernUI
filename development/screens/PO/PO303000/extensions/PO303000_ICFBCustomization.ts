import {
	PXFieldState,
	PXFieldOptions,
	PXView,
	controlConfig,
} from "client-controls";
import {
	PO303000,
	POLandedCostDocHeader as POLandedCostDocHeader_Base,
} from "src/screens/PO/PO303000/PO303000";

// Screen extension
export interface PO303000_ICFBCustomization extends PO303000 {}
export class PO303000_ICFBCustomization {}

// Extend POLandedCostDocHeader view (Document Summary form header)
export interface POLandedCostDocHeader extends POLandedCostDocHeader_Base {}
export class POLandedCostDocHeader {
	@controlConfig({ allowEdit: true })
	UsrICFBPONbr: PXFieldState<PXFieldOptions.CommitChanges>;
}
