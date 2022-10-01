import { ref } from 'vue'

export function usePost() {
    let posts = ref([]);

    const loadPosts = () => {
        // Use axios to get posts from https://gorest.co.in/public/v2/posts
        // and assign them to the posts variable
    }

    return {
        posts,
        loadPosts
    }
}
