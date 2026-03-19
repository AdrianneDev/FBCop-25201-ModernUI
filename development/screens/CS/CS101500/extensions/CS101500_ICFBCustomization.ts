import { PXFieldState, PXFieldOptions } from "client-controls";
import { CS101500 } from "src/screens/CS/CS101500/CS101500";
import { Contact as Contact_Base } from "src/screens/common/form-contact-profile/form-contact-profile";

export interface CS101500_ICFBCustomization extends CS101500 {}
export class CS101500_ICFBCustomization {}

export interface Contact extends Contact_Base {}
export class Contact {
	// BIR Accreditation
	UsrICFBAccreditationNbr: PXFieldState;
	UsrICFBAccredIssueDate: PXFieldState<PXFieldOptions.CommitChanges>;
	UsrICFBAccredValidUntil: PXFieldState;
	UsrICFBBIRPermit: PXFieldState;
	UsrICFBPermitIssueDate: PXFieldState<PXFieldOptions.CommitChanges>;
	UsrICFBPermitValidUntil: PXFieldState;

	// Wire Transfer
	UsrICFBAccountNameCompany: PXFieldState;
	UsrICFBBankNameCompany: PXFieldState;
	UsrICFBBankAddressCompany: PXFieldState;
	UsrICFBBankRoutingNbrCompany: PXFieldState;
	UsrICFBAccountNbrCompany: PXFieldState;
	UsrICFBSwiftCodeCompany: PXFieldState;

	// ACH Delivery
	UsrICFBDelBankRoutingNbrCompany: PXFieldState;
	UsrICFBDelAccountNameCompany: PXFieldState;
	UsrICFBDelAccountNbrCompany: PXFieldState;
}
