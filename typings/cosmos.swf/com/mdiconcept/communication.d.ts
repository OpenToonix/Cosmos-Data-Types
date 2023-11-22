import { events } from "../../../flash/events";
import { net } from "../../../flash/net";

export declare module communication {
  module client {
    module red5 {
      class Connection extends events.EventDispatcher {
        private static readonly CONNECTING: number;
        private static readonly CONNECTED: number;
        private static readonly DISCONNECTED: number;

        private K1E386D392C524F93A6008CF32A920BB0K: string;
        /**
         * Aka sharedObject
         */
        private K63BDF02B5A7E46E5976F07DF163A997AK: net.SharedObject;
        private KD1AD9CDE0C984479812C51A67573A588K: boolean;
        private K55ACB7F089F145178444DDEE89535DD4K: Array<unknown>;
        private K9E95AB1505DE40559C4D3199686EC0B6K: string;
        private K78B59C057B6E48C5ACDD3CF3A982E3A5K: number;
        private K8185657F961943DA846F28F4A6CF0CD3K: string;
        private status: number;
        private nc: net.NetConnection;
        /**
         * Aka connectionHandler
         */
        private K886745DFC1F24666BB1A7C8795DF2A77K: ConnectionHandler;

        constructor();
      }

      export class ConnectionHandler {}
    }
  }
}
