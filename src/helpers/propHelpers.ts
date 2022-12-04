import { PageSettings } from "../calendly";

function getFirstCharacter(str: string): string {
  const strArray: string[] = str.split("");
  return strArray[0];
}

function sanitizeColorString(str: string): string {
  if (getFirstCharacter(str) === "#") {
    str = str.slice(1);
  }
  return str;
}

export function sanitizePageSettingsProps(
  props?: PageSettings
): PageSettings | undefined {
  if (props?.primaryColor) {
    props.primaryColor = sanitizeColorString(props.primaryColor);
  }

  if (props?.textColor) {
    props.textColor = sanitizeColorString(props.textColor);
  }

  if (props?.backgroundColor) {
    props.backgroundColor = sanitizeColorString(props.backgroundColor);
  }

  return props;
}
