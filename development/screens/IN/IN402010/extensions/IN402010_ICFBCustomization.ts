import { PXFieldState } from "client-controls";
import {
	IN402010,
	IntercompanyGoodsInTransitResult as IntercompanyGoodsInTransitResult_Base
} from "src/screens/IN/IN402010/IN402010";

export interface IN402010_ICFBCustomization extends IN402010 {}
export class IN402010_ICFBCustomization {}

// Extend the Results view class to add custom grid columns
export interface IntercompanyGoodsInTransitResult extends IntercompanyGoodsInTransitResult_Base {}
export class IntercompanyGoodsInTransitResult {
	UsrICFBContainerNbr: PXFieldState;
	UsrICFBOrderNbr: PXFieldState;
	UsrICFBInvoiceNbr: PXFieldState;
}
