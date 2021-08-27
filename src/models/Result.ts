export class Result {
  success: boolean = false;
  data: any = null;
  messages: string[] = [];

  constructor(success: boolean = false, data: any = null, messages: string[]) {
    this.success = success;
    this.data = data;
    this.messages = messages;
  }
  static fail = (messages: string[]): Result =>
    new Result(false, null, messages);
  static successFull = (data: any = null, messages: string[] = []) =>
    new Result(true, data, messages);
}
