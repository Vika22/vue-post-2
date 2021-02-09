import {Module, Action, Mutation, getModule, VuexModule } from 'vuex-module-decorators'
import store from '@/store'
import {getPost} from '@/api/posts'

@Module({namespaced:true, name: 'posts', store, dynamic: true})
class Posts extends VuexModule{
    
    posts: Array<object> = []
    post: Array<object> = []

    @Mutation
    UPDATE_POSTS(data: Array<object>){        
        this.posts = data
    }

    @Action
    async getData(): Promise<void> {
        try{
           const data = await getPost;
           this.UPDATE_POSTS(data)           
        }catch(e){
            console.log(e);
            throw e;
        }
    }

}

export const PostsModule = getModule(Posts)