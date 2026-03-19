import { PXFieldState, PXFieldOptions } from "client-controls";
import {
	IN202500,
	ItemSettings as ItemSettings_Base
} from "src/screens/IN/IN202500/IN202500";

export interface IN202500_ICFBCustomization extends IN202500 {}
export class IN202500_ICFBCustomization {}

// Extend the ItemSettings view class to add custom fields
export interface ItemSettings extends ItemSettings_Base {}
export class ItemSettings {
	// General Tab - Item Defaults Section
	UsrICFBIsFairTrade: PXFieldState;
	UsrICFBFerValueCode: PXFieldState;
	UsrICFBMaxStorageDays: PXFieldState;
	UsrICFBShelfLife: PXFieldState;

	// Packaging Tab - Weight and Volume Section
	UsrICFBPackagingNetConversionRate: PXFieldState;
	UsrICFBGrossWeight: PXFieldState;
	UsrICFBGrossWeightUOM: PXFieldState;
	UsrICFBPackagingGrossConversionRate: PXFieldState;
	UsrICFBPackSize: PXFieldState;
	UsrICFBPackSizeOUM: PXFieldState;

	// Packaging Tab - Conversions Section
	UsrICFBNetWeightLbs: PXFieldState;
	UsrICFBNetWeightKg: PXFieldState;
	UsrICFBGrossWeightLBS: PXFieldState;
	UsrICFBGrossWeightKg: PXFieldState;
}
