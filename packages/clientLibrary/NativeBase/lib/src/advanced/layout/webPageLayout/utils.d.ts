export declare function noop(): void;
export declare function isTrue(): boolean;
export declare function jsonToQueryString(json: any): string;
/**
 * url is like 'https://politicl.com/?oauth_token=GD66gQAAAAAAw9-CAAABZFNnAQI&oauth_verifier=hkpNcUwoPBHtm1K9FOfb7v3cruKw9vdM'
 * @param url
 */
export declare function isTwitterCallBack(url: string): boolean;
export declare function isFacebookCallBack(url: string): boolean;
/**
 * https://www.facebook.com/dialog/return/close?post_id=2058310397830772#_=_
 *
 * https://twitter.com/intent/tweet/complete?url=http%3A%2F%2Fwww.firstpost.co…ty%20component%20for%20smart%20cities&latest_status_id=1019490609713774592
 *
 * @param url
 */
export declare function isShareCallBack(url: string): boolean;
