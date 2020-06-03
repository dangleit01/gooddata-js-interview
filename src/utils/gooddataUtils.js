const grossProfitMeasure = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/6877';
const dateAttributeInMonths = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2142';

export const ProjectId = 'xms7ga4tf3g3nzucd8380o2bev8oeknp';

export const Measures = [
    {
        measure: {
            localIdentifier: 'm1',
            definition: {
                measureDefinition: {
                    item: {
                        uri: grossProfitMeasure
                    }
                }
            },
            alias: '$ Gross Profit'
        }
    }
];

export const ViewBy = {
    visualizationAttribute:
    {
        displayForm: {
            uri: dateAttributeInMonths
        },
        localIdentifier: 'a1'
    }
}