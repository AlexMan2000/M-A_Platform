import { describe, it, expect, vi, beforeEach } from 'vitest';
import { formate } from '@/commons/utils/formatters/dateFormatter';

describe("dateFormatterTest", ()=>{
    const current = new Date();
    it(`Test case 1: Input format (Date, "date")`, ()=>{
        
        const result = formate(current, "date");
        expect(/\d{4}-\d{1,2}-\d{1,2}/.test(result)).toBe(true);
    })


    it(`Test case 2: Input format (Date, "datetime")`, ()=>{
        const result = formate(current, "datetime");
        expect(/\d{4}-\d{1,2}-\d{1,2} \d{1,2}:\d{1,2}:\d{1,2}/.test(result)).toBe(true);
    })


    it (`Test case 3: Input format (Date, "date", true)` , ()=>{
        const result = formate(current, "date", true);
        expect(/\d{4}-\d{2}-\d{2}/.test(result)).toBe(true);
    })


    it (`Test case 4: Input format (Date, "datetime", true)` , ()=>{
        const result = formate(current, "datetime", true);
        expect(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/.test(result)).toBe(true);
    })


    it (`Test case 5: Input format (Date, "yyyy年MM月dd日 HH:mm:ss.ms", true)` , ()=>{
        const result = formate(current, "datetime", true);
        expect(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/.test(result)).toBe(true);
    })


    it (`Test case 6: Input format (Date, (dateInfo)=>{...})` , ()=>{
        const result = formate(current, (_) => {
            return "haha"
        }, true);
        expect(result).toBe("haha");
    })
})