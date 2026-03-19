import { PXFieldState, PXActionState, PXView, createSingle, viewInfo } from "client-controls";
import { AR302000 } from "src/screens/AR/AR302000/AR302000";

// View class for Bank Reference Number
export class ICFBARPaymentBankReferenceNo extends PXView {
    UsrICFBBankRefNbr: PXFieldState;
}

// Extend the screen
export interface AR302000_ICFBCustomization extends AR302000 {}
export class AR302000_ICFBCustomization {
    SetBankRefNo: PXActionState;

    @viewInfo({ containerName: "Bank Reference" })
    ICFBARPaymentBankReferenceNoView = createSingle(ICFBARPaymentBankReferenceNo);
}
