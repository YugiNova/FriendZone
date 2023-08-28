<?php
namespace App\Repository;

use App\Models\Notification;
use Illuminate\Support\Facades\DB;

class NotificationRepository{

    public function getNotificationsByUser($itemPerTime=5,$userId) {
        $notifications = Notification::where('recieve_id',$userId);
        $unread = Notification::where('recieve_id',$userId)->select(DB::raw('COUNT(*) as count'))->groupBy('is_read')->having('is_read',false)->get();
        if(count($unread) > 0){
            $unread = $unread[0]->count;
        }
        else{
            $unread = 0;
        }
        $notifications = $notifications
                        ->orderBy('created_at','desc')
                        ->orderBy('updated_at','desc')
                        ->cursorPaginate($itemPerTime);

        if($notifications->hasMorePages()){
            $nextCursor = $notifications->nextCursor()->encode();
        }
        $nextPageUrl = $notifications->nextPageUrl();
        $data = $notifications->map(function ($notification) {
                                    $notification->sendUser;
                                    $notification->recieveUser;
                                    return $notification;
                                });

        return [
            'unread' => $unread,
            'nextCursor' =>$nextCursor ?? "",
            'nexPageUrl' => $nextPageUrl,
            'notifications' => $data
        ];
    }
} 
?>