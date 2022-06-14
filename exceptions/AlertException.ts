export default class AlertException extends Error {
  constructor(errorMessage: string, alertMessage: string) {
    super(errorMessage);
    alert(alertMessage);
  }
}
