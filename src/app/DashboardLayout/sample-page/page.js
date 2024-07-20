'use client';
import { Button, Typography } from '@mui/material';
import PageContainer from '../components/container/PageContainer';
import DashboardCard from '../components/shared/DashboardCard';
import RecentTransactions from '../components/dashboard/RecentTransactions';

const SamplePage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
   <div className=' grid grid-cols-2'>
   <div className=' border h-60 w-60 rounded-full bg-white'>
   <div className=' justify-center text-center relative top-24'>
   <p>Level 1</p>
   <p>Hyip Member</p>
   </div>
   </div>
      <DashboardCard className="w-44" width={50}>
       <p>Referral URL</p>
       <div className=' border w-full'></div>
       <div className='flex my-4'>
        <div className='border w-60 h-10 relative'></div>
        <Button className=' bg-orange-500 hoverbg-orange-500'>Copy Url</Button>
       </div>
       <p>0 peoples are joined by using this URL</p>
      </DashboardCard>
   </div>
      <div className='grid grid-cols-4 gap-2 my-32'>
         <div className=' space-y-2'>
         <DashboardCard title="" className="my-5">
        <Typography>1</Typography>
        <Typography>All</Typography>
        <Typography>Transactions</Typography>
      </DashboardCard>
      <DashboardCard title="" className="my-5">
        <Typography>$0</Typography>
        <Typography>Total Deposit</Typography>
      </DashboardCard>
      <DashboardCard title="" className="my-5">
         <Typography>$0</Typography>
         <Typography>Investment</Typography>
         <Typography>Bonus</Typography>
      </DashboardCard>
         </div>
         <div className=' space-y-2'>
         <DashboardCard title="" className="my-5">
         <Typography>$0</Typography>
         <Typography>Total Deposit</Typography>
      </DashboardCard>
      <DashboardCard title="" className="my-5">
         <Typography>$0</Typography>
         <Typography>Total</Typography>
         <Typography>Withdraw</Typography>
      </DashboardCard>
      <DashboardCard title="" className="my-5">
         <Typography>1</Typography>
         <Typography> Rank </Typography>
         <Typography>Achieved</Typography>
      </DashboardCard>

         </div>
         <div className=' space-y-2'>
         <DashboardCard title="" className="my-5">
         <Typography>$0</Typography>
         <Typography>Total</Typography>
         <Typography>Investment</Typography>
      </DashboardCard>
      <DashboardCard title="" className="my-5">
         <Typography>$0</Typography>
         <Typography>Referral</Typography>
         <Typography> Bonus</Typography>
      </DashboardCard>
      <DashboardCard title="" className="my-5">
         <Typography>0</Typography>
         <Typography>Total Ticket</Typography>
      </DashboardCard>
         </div>
         <div className=' space-y-2'>
         <DashboardCard title="" className="my-5">
        <Typography>$5</Typography>
        <Typography>Total Profit</Typography>
      </DashboardCard>
      <DashboardCard title="" className="my-5">
         <Typography>$0</Typography>
         <Typography>Total Deposit</Typography>
      </DashboardCard>
      <DashboardCard title="" className="my-5">
         <Typography>$0</Typography>
         <Typography>Total Deposit</Typography>
      </DashboardCard>
         </div>
      </div>
      <RecentTransactions/>
    </PageContainer>
  );
};

export default SamplePage;

