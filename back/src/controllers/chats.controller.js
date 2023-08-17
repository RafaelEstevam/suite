
const mockChats = [
    {id: `1111`, companyId:`12345678`, clientId: `1`, messages: [
        {id: `1`, text: `teste de mensagem na empresa 1`, userType: `client`},
        {id: `2`, text: `teste de mensagem na empresa 1`, userType: `user`},
        {id: `3`, text: `teste de mensagem na empresa 1`, userType: `user`},
        {id: `4`, text: `teste de mensagem na empresa 1`, userType: `client`},
        {id: `5`, text: `teste de mensagem na empresa 1`, userType: `client`},
        {id: `6`, text: `teste de mensagem na empresa 1`, userType: `user`}
    ]},
    {id: `2222`, companyId:`12345678`, clientId: `2`, messages: [
        {id: `1`, text: `teste de mensagem na empresa 1`, userType: `client`},
        {id: `2`, text: `teste de mensagem na empresa 1`, userType: `user`},
        {id: `3`, text: `teste de mensagem na empresa 1`, userType: `user`},
        {id: `4`, text: `teste de mensagem na empresa 1`, userType: `client`},
        {id: `5`, text: `teste de mensagem na empresa 1`, userType: `client`},
        {id: `6`, text: `teste de mensagem na empresa 1`, userType: `user`}
    ]},
    {id: `3333`, companyId:`87654321`, clientId: `3`, messages: [
        {id: `1`, text: `teste de mensagem na empresa 2`, userType: `client`},
        {id: `2`, text: `teste de mensagem na empresa 2`, userType: `user`},
        {id: `3`, text: `teste de mensagem na empresa 2`, userType: `user`},
        {id: `4`, text: `teste de mensagem na empresa 2`, userType: `client`},
        {id: `5`, text: `teste de mensagem na empresa 2`, userType: `client`},
        {id: `6`, text: `teste de mensagem na empresa 2`, userType: `user`}
    ]}
]

const ChatsController = {
    getChatsByCompanyId: (req, res) => {
        const {companyId} = req.params
        const findedChats = mockChats.filter((item) => item.companyId === companyId)
        return res.status(200).send(findedChats)
    },
    getChatByClientIdAndCompanyId: (req, res) => {
        const {clientId, companyId} = req.params
        const findedChats = mockChats.filter((item) => item.companyId === companyId && item.clientId === clientId)
        return res.status(200).send(findedChats)
    }
}

module.exports = ChatsController;