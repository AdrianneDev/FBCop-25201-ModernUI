import { PXFieldState } from "client-controls";
import { CS102000 } from "src/screens/CS/CS102000/CS102000";
import { Contact as Contact_Base } from "src/screens/common/form-contact-profile/form-contact-profile";

export interface CS102000_ICFBCustomization extends CS102000 {}
export class CS102000_ICFBCustomization {}

export interface Contact extends Contact_Base {}
export class Contact {
	// Fair Trade ID
	UsrICFBFairTradeID: PXFieldState;

	// Wire Transfer
	UsrICFBAccountNameBranch: PXFieldState;
	UsrICFBBankNameBranch: PXFieldState;
	UsrICFBBankAddressBranch: PXFieldState;
	UsrICFBBankRoutingNbrBranch: PXFieldState;
	UsrICFBAccountNbrBranch: PXFieldState;
	UsrICFBSwiftCodeBranch: PXFieldState;

	// ACH Delivery
	UsrICFBDelBankRoutingNbrBranch: PXFieldState;
	UsrICFBDelAccountNameBranch: PXFieldState;
	UsrICFBDelAccountNbrBranch: PXFieldState;
}
