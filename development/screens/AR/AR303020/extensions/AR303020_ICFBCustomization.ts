import { PXFieldState } from "client-controls";
import { Location2 as Location2_Base } from "src/screens/AR/AR303020/AR303020";

// Extend Location2 view to add ICFBCustomization fields
export interface Location2 extends Location2_Base {}
export class Location2 {
    // For Wire Transfer
    UsrICFBAccountName: PXFieldState;
    UsrICFBBankName: PXFieldState;
    UsrICFBBankAddress: PXFieldState;
    UsrICFBBankRoutingNbr: PXFieldState;
    UsrICFBAccountNbr: PXFieldState;
    UsrICFBSwiftCode: PXFieldState;

    // For ACH Delivery
    UsrICFBDelBankRoutingNbr: PXFieldState;
    UsrICFBDelAccountName: PXFieldState;
    UsrICFBDelAccountNbr: PXFieldState;
}
