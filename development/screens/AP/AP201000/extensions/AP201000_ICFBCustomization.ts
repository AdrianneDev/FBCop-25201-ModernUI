import { PXFieldState } from "client-controls";
import {
	AP201000,
	VendorClass2 as VendorClass2_Base
} from "src/screens/AP/AP201000/AP201000";

export interface AP201000_ICFBCustomization extends AP201000 {}
export class AP201000_ICFBCustomization {}

// Extend the VendorClass2 view class to add custom fields
export interface VendorClass2 extends VendorClass2_Base {}
export class VendorClass2 {
	UsrICFBIsNutBuying: PXFieldState;
}
