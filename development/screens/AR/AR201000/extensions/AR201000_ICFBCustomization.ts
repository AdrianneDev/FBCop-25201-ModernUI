import { PXFieldState } from "client-controls";
import { AR201000, CustomerClass2 as CustomerClass2_Base } from "src/screens/AR/AR201000/AR201000";

export interface AR201000_ICFBCustomization extends AR201000 {}
export class AR201000_ICFBCustomization {}

// Extend the CustomerClass2 view class to add custom fields
export interface CustomerClass2 extends CustomerClass2_Base {}
export class CustomerClass2 {
	UsrICFBCaptureBankDetailsFrom: PXFieldState;
}
