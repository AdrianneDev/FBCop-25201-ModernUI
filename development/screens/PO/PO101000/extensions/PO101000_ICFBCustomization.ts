import { PXFieldState } from "client-controls";
import {
	PO101000,
	POSetup as POSetup_Base
} from "src/screens/PO/PO101000/PO101000";

export interface PO101000_ICFBCustomization extends PO101000 {}
export class PO101000_ICFBCustomization {}

// Extend the POSetup view class to add custom fields
export interface POSetup extends POSetup_Base {}
export class POSetup {
	UsrICFBFarmer: PXFieldState;
}
