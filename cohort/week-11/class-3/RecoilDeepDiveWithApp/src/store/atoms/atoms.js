import { atom, selector } from "recoil"

export const networkAtom = atom({
    key: "network-atom",
    default: 104
})
export const jobAtom = atom({
    key: "job-atom",
    default: 0
})
export const notificationAtom = atom({
    key: "notification-atom",
    default: 22
})
export const messageAtom = atom({
    key: "message-atom",
    default: 0
})

export const sumOfAllAppBarSelector = selector
({
    key:"total-selector",
    get: ({get}) => {
        const notificationCount = get(notificationAtom)
        const networkCount = get(networkAtom)
        const messageCount = get(messageAtom)
        const jobCount = get(jobAtom)
        return notificationCount+ messageCount+ jobCount+ networkCount
    }
})
