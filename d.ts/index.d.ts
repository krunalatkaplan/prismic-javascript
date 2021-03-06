import { Experiments as PrismicExperiment } from './experiments';
import { DefaultClient } from './client';
import PrismicApi, { ApiOptions } from './Api';
import ResolvedApi from './ResolvedApi';
declare namespace Prismic {
    const experimentCookie = "io.prismic.experiment";
    const previewCookie = "io.prismic.preview";
    const Predicates: {
        at(fragment: string, value: string | number | Date | (string | number | Date)[]): string;
        not(fragment: string, value: string | number | Date | (string | number | Date)[]): string;
        missing(fragment: string): string;
        has(fragment: string): string;
        any(fragment: string, values: (string | number | Date)[]): string;
        in(fragment: string, values: string[]): string;
        fulltext(fragment: string, value: string): string;
        similar(documentId: string, maxResults: number): string;
        date: {
            before(fragment: string, before: string | number | Date): string;
            after(fragment: string, after: string | number | Date): string;
            between(fragment: string, before: string | number | Date, after: string | number | Date): string;
            dayOfMonth(fragment: string, day: number): string;
            dayOfMonthAfter(fragment: string, day: number): string;
            dayOfMonthBefore(fragment: string, day: number): string;
            dayOfWeek(fragment: string, day: string | number): string;
            dayOfWeekAfter(fragment: string, day: string | number): string;
            dayOfWeekBefore(fragment: string, day: string | number): string;
            month(fragment: string, month: string | number): string;
            monthBefore(fragment: string, month: string | number): string;
            monthAfter(fragment: string, month: string | number): string;
            year(fragment: string, year: number): string;
            hour(fragment: string, hour: number): string;
            hourBefore(fragment: string, hour: number): string;
            hourAfter(fragment: string, hour: number): string;
        };
        dateBefore: (fragment: string, before: string | number | Date) => string;
        dateAfter: (fragment: string, after: string | number | Date) => string;
        dateBetween: (fragment: string, before: string | number | Date, after: string | number | Date) => string;
        dayOfMonth: (fragment: string, day: number) => string;
        dayOfMonthAfter: (fragment: string, day: number) => string;
        dayOfMonthBefore: (fragment: string, day: number) => string;
        dayOfWeek: (fragment: string, day: string | number) => string;
        dayOfWeekAfter: (fragment: string, day: string | number) => string;
        dayOfWeekBefore: (fragment: string, day: string | number) => string;
        month: (fragment: string, month: string | number) => string;
        monthBefore: (fragment: string, month: string | number) => string;
        monthAfter: (fragment: string, month: string | number) => string;
        year: (fragment: string, year: number) => string;
        hour: (fragment: string, hour: number) => string;
        hourBefore: (fragment: string, hour: number) => string;
        hourAfter: (fragment: string, hour: number) => string;
        number: {
            gt(fragment: string, value: number): string;
            lt(fragment: string, value: number): string;
            inRange(fragment: string, before: number, after: number): string;
        };
        gt: (fragment: string, value: number) => string;
        lt: (fragment: string, value: number) => string;
        inRange: (fragment: string, before: number, after: number) => string;
        near: (fragment: string, latitude: number, longitude: number, radius: number) => string;
        geopoint: {
            near(fragment: string, latitude: number, longitude: number, radius: number): string;
        };
    };
    const Experiments: typeof PrismicExperiment;
    const Api: typeof PrismicApi;
    function client(url: string, options?: ApiOptions): DefaultClient;
    function getApi(url: string, options?: ApiOptions): Promise<ResolvedApi>;
    function api(url: string, options?: ApiOptions): Promise<ResolvedApi>;
}
export = Prismic;
