interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['End Customer'],
  tenantRoles: ['Business Owner', 'Team Member', 'Bike Mechanic'],
  tenantName: 'Company',
  applicationName: 'Hourly Bike Rental Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage personal user information',
    'View company information',
    'Edit personal user information',
    'Delete personal user information',
  ],
  ownerAbilities: [
    'Manage company information',
    'Edit personal user information',
    "Manage company's bikes",
    "Edit user's tenant information",
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/4f2e5fff-5052-45c0-88c5-be90b06a04ea',
};
