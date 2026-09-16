import { ServiceData } from "./services/types";
import { DIGITAL_MARKETING_SERVICES } from "./services/digitalMarketing";
import { AI_AUTOMATION_SERVICES } from "./services/aiAutomation";
import { SOFTWARE_DEVELOPMENT_SERVICES } from "./services/softwareDevelopment";
import { STANDALONE_SERVICES } from "./services/standaloneServices";
import { BPO_CHILD_SERVICES } from "./services/bpoSubServices";

export type { ServiceData } from "./services/types";
export {
  DIGITAL_MARKETING_SERVICES,
  AI_AUTOMATION_SERVICES,
  SOFTWARE_DEVELOPMENT_SERVICES,
  STANDALONE_SERVICES,
  BPO_CHILD_SERVICES,
};

// Master map of all service pages indexed by their canonical path
export const ALL_SERVICES_BY_PATH: Record<string, ServiceData> = {
  "/digital-marketing": DIGITAL_MARKETING_SERVICES["hub"],
  "/digital-marketing/seo-services": DIGITAL_MARKETING_SERVICES["seo-services"],
  "/digital-marketing/performance-marketing": DIGITAL_MARKETING_SERVICES["performance-marketing"],
  "/digital-marketing/google-ads": DIGITAL_MARKETING_SERVICES["google-ads"],
  "/digital-marketing/social-media-marketing": DIGITAL_MARKETING_SERVICES["social-media-marketing"],
  "/digital-marketing/content-marketing": DIGITAL_MARKETING_SERVICES["content-marketing"],

  "/ai-automation": AI_AUTOMATION_SERVICES["hub"],
  "/ai-automation/ai-agent-development": AI_AUTOMATION_SERVICES["ai-agent-development"],
  "/ai-automation/ai-chatbot-development": AI_AUTOMATION_SERVICES["ai-chatbot-development"],
  "/ai-automation/workflow-automation": AI_AUTOMATION_SERVICES["workflow-automation"],
  "/ai-automation/marketing-automation": AI_AUTOMATION_SERVICES["marketing-automation"],
  "/ai-automation/crm-automation": AI_AUTOMATION_SERVICES["crm-automation"],

  "/software-development": SOFTWARE_DEVELOPMENT_SERVICES["hub"],
  "/software-development/web-development": SOFTWARE_DEVELOPMENT_SERVICES["web-development"],
  "/software-development/custom-software": SOFTWARE_DEVELOPMENT_SERVICES["custom-software"],
  "/software-development/wordpress-development": SOFTWARE_DEVELOPMENT_SERVICES["wordpress-development"],
  "/software-development/shopify-development": SOFTWARE_DEVELOPMENT_SERVICES["shopify-development"],
  "/software-development/react-development": SOFTWARE_DEVELOPMENT_SERVICES["react-development"],
  "/software-development/api-development": SOFTWARE_DEVELOPMENT_SERVICES["api-development"],

  "/ui-ux-design": STANDALONE_SERVICES["ui-ux-design"],
  "/technology-consulting": STANDALONE_SERVICES["technology-consulting"],

  "/bpo-services/customer-support-outsourcing": BPO_CHILD_SERVICES["customer-support-outsourcing"],
  "/bpo-services/sales-outsourcing": BPO_CHILD_SERVICES["sales-outsourcing"],
  "/bpo-services/technical-support-outsourcing": BPO_CHILD_SERVICES["technical-support-outsourcing"],
  "/bpo-services/back-office-outsourcing": BPO_CHILD_SERVICES["back-office-outsourcing"],
};
