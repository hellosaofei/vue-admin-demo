import { project_title } from "@/settings";

const title = project_title || "后台管理系统模板";
function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
}
export { getPageTitle };
