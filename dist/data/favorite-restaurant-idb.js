import{openDB}from"idb";import CONFIG from"../../scripts/globals/config";const{DATABASE_NAME,DATABASE_VERSION,OBJECT_STORE_NAME}=CONFIG,dbPromise=openDB(DATABASE_NAME,DATABASE_VERSION,{upgrade(t){t.createObjectStore(OBJECT_STORE_NAME,{keyPath:"id"})}}),FavoriteRestaurantIdb={async getRestaurant(t){if(t)return(await dbPromise).get(OBJECT_STORE_NAME,t)},getAllRestaurants:async()=>(await dbPromise).getAll(OBJECT_STORE_NAME),async putRestaurant(t){if(t.hasOwnProperty("id"))return(await dbPromise).put(OBJECT_STORE_NAME,t)},deleteRestaurant:async t=>(await dbPromise).delete(OBJECT_STORE_NAME,t)};export default FavoriteRestaurantIdb;