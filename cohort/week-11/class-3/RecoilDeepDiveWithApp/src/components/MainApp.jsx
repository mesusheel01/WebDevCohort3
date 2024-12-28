import { useRecoilState, useRecoilValue } from "recoil"
import { jobAtom, messageAtom, networkAtom, notificationAtom, sumOfAllAppBarSelector } from "../store/atoms/atoms"
// import { useMemo } from "react"


const MainApp = () => {
    const notificationCount = useRecoilValue(notificationAtom)
    const networkCount = useRecoilValue(networkAtom)
    // this is a diffrent state provided by recoil library to use two variable to render and change the state of the component just like useState
    const [messageCount, setMessageAtomCount] = useRecoilState(messageAtom)
    const jobCount = useRecoilValue(jobAtom)

    //we can use memo to change the sumofAllSelector value according to the change the dependencies.
    //we can use this approach if only we want to use the varialbe sumOfAllSelector in this component only but to globallyfy this we should use selector so multiple component can use this.
    // const sumOfAllSelector = useMemo(()=>{
    //     return messageCount+jobCount + notificationCount + networkCount
    // },[messageCount, jobCount , notificationCount , networkCount])


    // --this is selector approach
    const sumOfAllSelectorCount = useRecoilValue(sumOfAllAppBarSelector)


  return (
    <div>
      <button>Home ()</button>

      <button>My network ({networkCount >= 100?"99+": networkCount})</button>
      <button>Jobs ({jobCount})</button>
      <button>Messages ({messageCount})</button>
      <button>Notifications ({notificationCount})</button>

      <button onClick={()=>{
        setMessageAtomCount(c => c+1)
      }}>Me ({sumOfAllSelectorCount})</button>
    </div>
  )
}

export default MainApp
