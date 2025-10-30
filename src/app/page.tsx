import AddCompanyButton from './components/add-company-button';
// import MagicButton from './components/magic-button';
// import StatusLabel, { Status } from './components/status-label';
// import ClientComponent from './components/client-component';
// import ServerComponent from './components/server-component';
// import ServerComponentCopy from './components/server-component-copy';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">
        Home page
        {/* {new Date().toTimeString()} */}
      </h1>
      {/* <AddCompanyButton /> */}
      {/* <MagicButton/> */}
      {/* <ServerComponent />
      <ClientComponent><ServerComponentCopy/></ClientComponent> */}
      {/* <StatusLabel status={Status.Active}>Active</StatusLabel> */}
      {/* <StatusLabel status={Status.NotActive}>Not Active</StatusLabel> */}
      {/* <StatusLabel status={Status.Pending}>Pending</StatusLabel> */}
      {/* <StatusLabel status={Status.Suspended}>Suspended</StatusLabel> */}
    </main>
  );
}
