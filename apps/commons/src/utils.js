export const tambah = (a, b) => a + b;

export const meaPrefix = '/mea'
export const saforaPrefix = '/safora'
export const leadServicePrefix = '/leads'
export const opptyServicePrefix = '/opportunity'
export const Checkpoints = {
    home: '/',
    meaList: `${meaPrefix}/list`,
    meaDetail: `${meaPrefix}/detail`,
    saforaDetail: `${saforaPrefix}/safora`,
		leadList: `${leadServicePrefix}/list`,
		leadDetail: `${leadServicePrefix}/detail/:id`,
		leadEdit: `${leadServicePrefix}/detail/:id/edit`,
		opptyList: `${opptyServicePrefix}/list`,
		opptyDetail: `${opptyServicePrefix}/detail/:id`,
		opptyEdit: `${opptyServicePrefix}/detail:/id/edit`,
}
