interface StandardParams {
  part?: AllPartLiterals | AllPartLiterals[]
  maxResults: number
  pageToken: string
}

interface VideoParams {
  id: string
}

interface ChannelParams {
  id: string
  forHandle: `@${string}`
  forUsername: string
}

// We're limiting the search to channels only
interface SearchParams {
  q: string
  type: "channel"
}

interface PlaylistItemsParams {
  id: string | string[]
  playlistId: string
}

export type AllPartLiterals = "snippet" | "contentDetails" | "statistics" | "status" | "paidProductPlacementDetails"
export type AllEndpointParams = Partial<StandardParams & VideoParams & ChannelParams & PlaylistItemsParams & SearchParams>

interface YTRootResponse<T> {
  etag: string
  nextPageToken: string
  prevPageToken: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items: T[]
}

export namespace yt.Responses {
  export type VideoList = YTRootResponse<{
    snippet: {
      title: string
      publishedAt: string
      channelId: string
      channelTitle: string
      description: string
    }
    paidProductPlacementDetails: {
      hasPaidProductPlacement: boolean
    }
  }>

  export type ChannelList = YTRootResponse<{
    snippet: {
      title: string
      description: string
      publishedAt: string
      thumbnails: {
        default: {
          url: string
        }
        medium: {
          url: string
        }
        high: {
          url: string
        }
      }
    }
    contentDetails: {
      relatedPlaylists: {
        uploads: string
      }
    }
  }>
}
