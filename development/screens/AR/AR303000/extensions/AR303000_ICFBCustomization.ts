import { PXFieldState, PXActionState, PXView, createCollection, viewInfo, gridConfig, GridPreset, linkCommand, columnConfig } from "client-controls";
import {
    AR303000,
    Customer2 as Customer2_Base
} from "src/screens/AR/AR303000/AR303000";

// Extend the screen to add views and actions
export interface AR303000_ICFBCustomization extends AR303000 {}
export class AR303000_ICFBCustomization {
    // FileDetails grid view for Hyperlink tab
    @viewInfo({ containerName: "Hyperlink" })
    FileDetails = createCollection(FileDetails);

    // BankDetails grid view for Bank Details tab
    @viewInfo({ containerName: "Bank Details" })
    BankDetails = createCollection(BankDetails);

    // Action for hyperlink
    GoToUrl: PXActionState;
}

// Extend the CurrentCustomer view class to add custom fields
export interface Customer2 extends Customer2_Base {}
export class Customer2 {
    // General tab fields
    UsrICFBFairTradeCode: PXFieldState;
    UsrICFBIsFerValueUsed: PXFieldState;

    // Billing tab - Wire Transfer fields
    UsrICFBAccountName: PXFieldState;
    UsrICFBBankName: PXFieldState;
    UsrICFBBankAddress: PXFieldState;
    UsrICFBBankRoutingNbr: PXFieldState;
    UsrICFBAccountNbr: PXFieldState;
    UsrICFBSwiftCode: PXFieldState;

    // Billing tab - ACH Delivery fields
    UsrICFBDelBankRoutingNbr: PXFieldState;
    UsrICFBDelAccountName: PXFieldState;
    UsrICFBDelAccountNbr: PXFieldState;

    // Shipping tab field
    UsrICFBDefaultShippingInstruction: PXFieldState;
}

// FileDetails grid (ICFBFileDetails)
@gridConfig({ preset: GridPreset.Details })
export class FileDetails extends PXView {
    @columnConfig({ width: 280 })
    DocumentUrl: PXFieldState;

    @columnConfig({ width: 280 })
    DocumentNotes: PXFieldState;

    @linkCommand<AR303000_ICFBCustomization>("GoToUrl")
    @columnConfig({ width: 140 })
    AttachmentLink: PXFieldState;

    @columnConfig({ width: 280 })
    FileLocation: PXFieldState;
}

// BankDetails grid (ICFBCustomerBankDetails)
@gridConfig({ preset: GridPreset.Details })
export class BankDetails extends PXView {
    @columnConfig({ width: 140 })
    OrgBAccountID: PXFieldState;

    @columnConfig({ width: 280 })
    AccountName: PXFieldState;

    @columnConfig({ width: 280 })
    BankName: PXFieldState;

    @columnConfig({ width: 280 })
    BankAddress: PXFieldState;

    @columnConfig({ width: 220 })
    BankAcctNo: PXFieldState;

    @columnConfig({ width: 220 })
    SwiftCode: PXFieldState;

    @columnConfig({ width: 220 })
    ChipsUID: PXFieldState;

    @columnConfig({ width: 280 })
    ForWireTransferAccountName: PXFieldState;

    @columnConfig({ width: 280 })
    ForWireTransferAccountNo: PXFieldState;

    @columnConfig({ width: 280 })
    ForWireTransferBankRoutingNo: PXFieldState;

    @columnConfig({ width: 280 })
    ForWireTransferSwiftCode: PXFieldState;

    @columnConfig({ width: 220 })
    ForACHDeliveryBankRoutingNo: PXFieldState;

    @columnConfig({ width: 280 })
    ForACHDeliveryAccountName: PXFieldState;

    @columnConfig({ width: 220 })
    ForACHDeliveryAccountNo: PXFieldState;
}
