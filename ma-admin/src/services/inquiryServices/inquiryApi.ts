
import { getRequest } from "../axiosInstance";

export const getBuyerInquiry = async (param?: any, config?: any) => {
    try {
        // url will be changed
        const res = await getRequest(
            "/inquiry/buyers",
            param,
            { timeout: 500, ...config }
        );

        console.log(res);
        const tableData = res.data.map((record, _) =>
        (
            {
                companyName: record.companyInfo.companyName,
                companyType: record.companyInfo.companyType?.join(", "),
                region: record.companyInfo.companyLocation,
                industry: record.companyInfo.industryAndField.join(", "),
                turnover: record.companyInfo.turnoverLevel.join(", ") + " " + record.companyInfo.currency?.join(", "),
                motivation: record.acquisitionNeeds.motivations?.join(", "),
                desiredIndustry: record.acquisitionNeeds.desiredIndustry,
                desiredRegion: record.acquisitionNeeds.desiredRegion,
                dealSize: record.acquisitionNeeds.preferredDealSize?.join(", ") + " " + record.companyInfo.currency?.join(", "),
                keyContact: record.contactInfo.keyContactPerson,
                publicationDate: "Jul 31 2024"
            }
        ))
        return tableData;
    } catch (error) {
        console.error("Error initializing model:", error);
        // alert("Database not deployed");
        return [];
        // throw error;
    }
};


export const getSellerInquiry = async (param?: any, config?: any) => {
    try {
        // url will be changed
        const res = await getRequest(
            "/inquiry/sellers",
            param,
            { timeout: 500, ...config}
        );
        const tableData = res.data.map((record, _) =>
        (
            {
                companyName: record.companyInfo.companyName,
                industry: record.companyInfo.industryAndField?.join(", "),
                region: record.companyInfo.companyLocation,
                motivation: record.sellingMotivations?.motivations?.join(", "),
                turnover: record.companyInfo.turnoverLevel.join(", ") + " " + record.companyInfo.currency?.join(", "),
                keyContact: record.contactInfo.keyContactPerson,
                publicationDate: "Jul 31 2024"
            }
        ))
        return tableData
    } catch (error) {
        console.error("Error initializing model:", error);
        // throw error;
        // alert("Database not deployed");
        return [];
    }
};
