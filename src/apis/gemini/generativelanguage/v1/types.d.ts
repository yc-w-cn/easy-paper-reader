/**
 * Generative Language API
 */
declare namespace generativelanguage {
  /**
   * Batch request to get embeddings from the model for a list of prompts.
   */
  type IBatchEmbedContentsRequest = {
    /**
     * Required. Embed requests for the batch. The model in each of these requests must match the model specified `BatchEmbedContentsRequest.model`.
     */
    requests?: Array<IEmbedContentRequest>;
  };

  /**
   * The response to a `BatchEmbedContentsRequest`.
   */
  type IBatchEmbedContentsResponse = {
    /**
     * Output only. The embeddings for each request, in the same order as provided in the batch request.
     */
    embeddings?: Array<IContentEmbedding>;
  };

  /**
   * Raw media bytes. Text should not be sent as raw bytes, use the 'text' field.
   */
  type IBlob = {
    /**
     * Raw bytes for media formats.
     */
    data?: string;
    /**
     * The IANA standard MIME type of the source data. Accepted types include: "image/png", "image/jpeg", "image/heic", "image/heif", "image/webp".
     */
    mimeType?: string;
  };

  /**
   * The request message for Operations.CancelOperation.
   */
  type ICancelOperationRequest = {};

  /**
   * A response candidate generated from the model.
   */
  type ICandidate = {
    /**
     * Output only. Citation information for model-generated candidate. This field may be populated with recitation information for any text included in the `content`. These are passages that are "recited" from copyrighted material in the foundational LLM's training data.
     */
    citationMetadata?: ICitationMetadata;
    /**
     * Output only. Generated content returned from the model.
     */
    content?: IContent;
    /**
     * Optional. Output only. The reason why the model stopped generating tokens. If empty, the model has not stopped generating the tokens.
     */
    finishReason?:
      | 'FINISH_REASON_UNSPECIFIED'
      | 'STOP'
      | 'MAX_TOKENS'
      | 'SAFETY'
      | 'RECITATION'
      | 'OTHER';
    /**
     * Output only. Index of the candidate in the list of candidates.
     */
    index?: number;
    /**
     * List of ratings for the safety of a response candidate. There is at most one rating per category.
     */
    safetyRatings?: Array<ISafetyRating>;
    /**
     * Output only. Token count for this candidate.
     */
    tokenCount?: number;
  };

  /**
   * A collection of source attributions for a piece of content.
   */
  type ICitationMetadata = {
    /**
     * Citations to sources for a specific response.
     */
    citationSources?: Array<ICitationSource>;
  };

  /**
   * A citation to a source for a portion of a specific response.
   */
  type ICitationSource = {
    /**
     * Optional. End of the attributed segment, exclusive.
     */
    endIndex?: number;
    /**
     * Optional. License for the GitHub project that is attributed as a source for segment. License info is required for code citations.
     */
    license?: string;
    /**
     * Optional. Start of segment of the response that is attributed to this source. Index indicates the start of the segment, measured in bytes.
     */
    startIndex?: number;
    /**
     * Optional. URI that is attributed as a source for a portion of the text.
     */
    uri?: string;
  };

  /**
   * The base structured datatype containing multi-part content of a message. A `Content` includes a `role` field designating the producer of the `Content` and a `parts` field containing multi-part data that contains the content of the message turn.
   */
  type IContent = {
    /**
     * Ordered `Parts` that constitute a single message. Parts may have different MIME types.
     */
    parts?: Array<IPart>;
    /**
     * Optional. The producer of the content. Must be either 'user' or 'model'. Useful to set for multi-turn conversations, otherwise can be left blank or unset.
     */
    role?: string;
  };

  /**
   * A list of floats representing an embedding.
   */
  type IContentEmbedding = {
    /**
     * The embedding values.
     */
    values?: Array<number>;
  };

  /**
   * Counts the number of tokens in the `prompt` sent to a model. Models may tokenize text differently, so each model may return a different `token_count`.
   */
  type ICountTokensRequest = {
    /**
     * Required. The input given to the model as a prompt.
     */
    contents?: Array<IContent>;
  };

  /**
   * A response from `CountTokens`. It returns the model's `token_count` for the `prompt`.
   */
  type ICountTokensResponse = {
    /**
     * The number of tokens that the `model` tokenizes the `prompt` into. Always non-negative.
     */
    totalTokens?: number;
  };

  /**
   * Metadata about the state and progress of creating a tuned model returned from the long-running operation
   */
  type ICreateTunedModelMetadata = {
    /**
     * The completed percentage for the tuning operation.
     */
    completedPercent?: number;
    /**
     * The number of steps completed.
     */
    completedSteps?: number;
    /**
     * Metrics collected during tuning.
     */
    snapshots?: Array<ITuningSnapshot>;
    /**
     * The total number of tuning steps.
     */
    totalSteps?: number;
    /**
     * Name of the tuned model associated with the tuning operation.
     */
    tunedModel?: string;
  };

  /**
   * Request containing the `Content` for the model to embed.
   */
  type IEmbedContentRequest = {
    /**
     * Required. The content to embed. Only the `parts.text` fields will be counted.
     */
    content?: IContent;
    /**
     * Required. The model's resource name. This serves as an ID for the Model to use. This name should match a model name returned by the `ListModels` method. Format: `models/{model}`
     */
    model?: string;
    /**
     * Optional. Optional task type for which the embeddings will be used. Can only be set for `models/embedding-001`.
     */
    taskType?:
      | 'TASK_TYPE_UNSPECIFIED'
      | 'RETRIEVAL_QUERY'
      | 'RETRIEVAL_DOCUMENT'
      | 'SEMANTIC_SIMILARITY'
      | 'CLASSIFICATION'
      | 'CLUSTERING';
    /**
     * Optional. An optional title for the text. Only applicable when TaskType is `RETRIEVAL_DOCUMENT`. Note: Specifying a `title` for `RETRIEVAL_DOCUMENT` provides better quality embeddings for retrieval.
     */
    title?: string;
  };

  /**
   * The response to an `EmbedContentRequest`.
   */
  type IEmbedContentResponse = {
    /**
     * Output only. The embedding generated from the input content.
     */
    embedding?: IContentEmbedding;
  };

  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }
   */
  type IEmpty = {};

  /**
   * Request to generate a completion from the model.
   */
  type IGenerateContentRequest = {
    /**
     * Required. The content of the current conversation with the model. For single-turn queries, this is a single instance. For multi-turn queries, this is a repeated field that contains conversation history + latest request.
     */
    contents?: Array<IContent>;
    /**
     * Optional. Configuration options for model generation and outputs.
     */
    generationConfig?: IGenerationConfig;
    /**
     * Optional. A list of unique `SafetySetting` instances for blocking unsafe content. This will be enforced on the `GenerateContentRequest.contents` and `GenerateContentResponse.candidates`. There should not be more than one setting for each `SafetyCategory` type. The API will block any contents and responses that fail to meet the thresholds set by these settings. This list overrides the default settings for each `SafetyCategory` specified in the safety_settings. If there is no `SafetySetting` for a given `SafetyCategory` provided in the list, the API will use the default safety setting for that category. Harm categories HARM_CATEGORY_HATE_SPEECH, HARM_CATEGORY_SEXUALLY_EXPLICIT, HARM_CATEGORY_DANGEROUS_CONTENT, HARM_CATEGORY_HARASSMENT are supported.
     */
    safetySettings?: Array<ISafetySetting>;
  };

  /**
   * Response from the model supporting multiple candidates. Note on safety ratings and content filtering. They are reported for both prompt in `GenerateContentResponse.prompt_feedback` and for each candidate in `finish_reason` and in `safety_ratings`. The API contract is that: - either all requested candidates are returned or no candidates at all - no candidates are returned only if there was something wrong with the prompt (see `prompt_feedback`) - feedback on each candidate is reported on `finish_reason` and `safety_ratings`.
   */
  type IGenerateContentResponse = {
    /**
     * Candidate responses from the model.
     */
    candidates?: Array<ICandidate>;
    /**
     * Returns the prompt's feedback related to the content filters.
     */
    promptFeedback?: IPromptFeedback;
  };

  /**
   * Configuration options for model generation and outputs. Not all parameters may be configurable for every model.
   */
  type IGenerationConfig = {
    /**
     * Optional. Number of generated responses to return. This value must be between [1, 8], inclusive. If unset, this will default to 1.
     */
    candidateCount?: number;
    /**
     * Optional. The maximum number of tokens to include in a candidate. If unset, this will default to output_token_limit specified in the `Model` specification.
     */
    maxOutputTokens?: number;
    /**
     * Optional. The set of character sequences (up to 5) that will stop output generation. If specified, the API will stop at the first appearance of a stop sequence. The stop sequence will not be included as part of the response.
     */
    stopSequences?: Array<string>;
    /**
     * Optional. Controls the randomness of the output. Note: The default value varies by model, see the `Model.temperature` attribute of the `Model` returned the `getModel` function. Values can range from [0.0,1.0], inclusive. A value closer to 1.0 will produce responses that are more varied and creative, while a value closer to 0.0 will typically result in more straightforward responses from the model.
     */
    temperature?: number;
    /**
     * Optional. The maximum number of tokens to consider when sampling. The model uses combined Top-k and nucleus sampling. Top-k sampling considers the set of `top_k` most probable tokens. Defaults to 40. Note: The default value varies by model, see the `Model.top_k` attribute of the `Model` returned the `getModel` function.
     */
    topK?: number;
    /**
     * Optional. The maximum cumulative probability of tokens to consider when sampling. The model uses combined Top-k and nucleus sampling. Tokens are sorted based on their assigned probabilities so that only the most likely tokens are considered. Top-k sampling directly limits the maximum number of tokens to consider, while Nucleus sampling limits number of tokens based on the cumulative probability. Note: The default value varies by model, see the `Model.top_p` attribute of the `Model` returned the `getModel` function.
     */
    topP?: number;
  };

  /**
   * Response from `ListModel` containing a paginated list of Models.
   */
  type IListModelsResponse = {
    /**
     * The returned Models.
     */
    models?: Array<IModel>;
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no more pages.
     */
    nextPageToken?: string;
  };

  /**
   * The response message for Operations.ListOperations.
   */
  type IListOperationsResponse = {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Array<IOperation>;
  };

  /**
   * Information about a Generative Language Model.
   */
  type IModel = {
    /**
     * Required. The name of the base model, pass this to the generation request. Examples: * `chat-bison`
     */
    baseModelId?: string;
    /**
     * A short description of the model.
     */
    description?: string;
    /**
     * The human-readable name of the model. E.g. "Chat Bison". The name can be up to 128 characters long and can consist of any UTF-8 characters.
     */
    displayName?: string;
    /**
     * Maximum number of input tokens allowed for this model.
     */
    inputTokenLimit?: number;
    /**
     * Required. The resource name of the `Model`. Format: `models/{model}` with a `{model}` naming convention of: * "{base_model_id}-{version}" Examples: * `models/chat-bison-001`
     */
    name?: string;
    /**
     * Maximum number of output tokens available for this model.
     */
    outputTokenLimit?: number;
    /**
     * The model's supported generation methods. The method names are defined as Pascal case strings, such as `generateMessage` which correspond to API methods.
     */
    supportedGenerationMethods?: Array<string>;
    /**
     * Controls the randomness of the output. Values can range over `[0.0,1.0]`, inclusive. A value closer to `1.0` will produce responses that are more varied, while a value closer to `0.0` will typically result in less surprising responses from the model. This value specifies default to be used by the backend while making the call to the model.
     */
    temperature?: number;
    /**
     * For Top-k sampling. Top-k sampling considers the set of `top_k` most probable tokens. This value specifies default to be used by the backend while making the call to the model.
     */
    topK?: number;
    /**
     * For Nucleus sampling. Nucleus sampling considers the smallest set of tokens whose probability sum is at least `top_p`. This value specifies default to be used by the backend while making the call to the model.
     */
    topP?: number;
    /**
     * Required. The version number of the model. This represents the major version
     */
    version?: string;
  };

  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  type IOperation = {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: IStatus;
    /**
     * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: { [key: string]: any };
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
     */
    name?: string;
    /**
     * The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: { [key: string]: any };
  };

  /**
   * A datatype containing media that is part of a multi-part `Content` message. A `Part` consists of data which has an associated datatype. A `Part` can only contain one of the accepted types in `Part.data`. A `Part` must have a fixed IANA MIME type identifying the type and subtype of the media if the `inline_data` field is filled with raw bytes.
   */
  type IPart = {
    /**
     * Inline media bytes.
     */
    inlineData?: IBlob;
    /**
     * Inline text.
     */
    text?: string;
  };

  /**
   * A set of the feedback metadata the prompt specified in `GenerateContentRequest.content`.
   */
  type IPromptFeedback = {
    /**
     * Optional. If set, the prompt was blocked and no candidates are returned. Rephrase your prompt.
     */
    blockReason?: 'BLOCK_REASON_UNSPECIFIED' | 'SAFETY' | 'OTHER';
    /**
     * Ratings for safety of the prompt. There is at most one rating per category.
     */
    safetyRatings?: Array<ISafetyRating>;
  };

  /**
   * Safety rating for a piece of content. The safety rating contains the category of harm and the harm probability level in that category for a piece of content. Content is classified for safety across a number of harm categories and the probability of the harm classification is included here.
   */
  type ISafetyRating = {
    /**
     * Was this content blocked because of this rating?
     */
    blocked?: boolean;
    /**
     * Required. The category for this rating.
     */
    category?:
      | 'HARM_CATEGORY_UNSPECIFIED'
      | 'HARM_CATEGORY_DEROGATORY'
      | 'HARM_CATEGORY_TOXICITY'
      | 'HARM_CATEGORY_VIOLENCE'
      | 'HARM_CATEGORY_SEXUAL'
      | 'HARM_CATEGORY_MEDICAL'
      | 'HARM_CATEGORY_DANGEROUS'
      | 'HARM_CATEGORY_HARASSMENT'
      | 'HARM_CATEGORY_HATE_SPEECH'
      | 'HARM_CATEGORY_SEXUALLY_EXPLICIT'
      | 'HARM_CATEGORY_DANGEROUS_CONTENT';
    /**
     * Required. The probability of harm for this content.
     */
    probability?:
      | 'HARM_PROBABILITY_UNSPECIFIED'
      | 'NEGLIGIBLE'
      | 'LOW'
      | 'MEDIUM'
      | 'HIGH';
  };

  /**
   * Safety setting, affecting the safety-blocking behavior. Passing a safety setting for a category changes the allowed proability that content is blocked.
   */
  type ISafetySetting = {
    /**
     * Required. The category for this setting.
     */
    category?:
      | 'HARM_CATEGORY_UNSPECIFIED'
      | 'HARM_CATEGORY_DEROGATORY'
      | 'HARM_CATEGORY_TOXICITY'
      | 'HARM_CATEGORY_VIOLENCE'
      | 'HARM_CATEGORY_SEXUAL'
      | 'HARM_CATEGORY_MEDICAL'
      | 'HARM_CATEGORY_DANGEROUS'
      | 'HARM_CATEGORY_HARASSMENT'
      | 'HARM_CATEGORY_HATE_SPEECH'
      | 'HARM_CATEGORY_SEXUALLY_EXPLICIT'
      | 'HARM_CATEGORY_DANGEROUS_CONTENT';
    /**
     * Required. Controls the probability threshold at which harm is blocked.
     */
    threshold?:
      | 'HARM_BLOCK_THRESHOLD_UNSPECIFIED'
      | 'BLOCK_LOW_AND_ABOVE'
      | 'BLOCK_MEDIUM_AND_ABOVE'
      | 'BLOCK_ONLY_HIGH'
      | 'BLOCK_NONE';
  };

  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  type IStatus = {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;
    /**
     * A list of messages that carry the error details. There is a common set of message types for APIs to use.
     */
    details?: Array<{ [key: string]: any }>;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  };

  /**
   * Record for a single tuning step.
   */
  type ITuningSnapshot = {
    /**
     * Output only. The timestamp when this metric was computed.
     */
    computeTime?: string;
    /**
     * Output only. The epoch this step was part of.
     */
    epoch?: number;
    /**
     * Output only. The mean loss of the training examples for this step.
     */
    meanLoss?: number;
    /**
     * Output only. The tuning step.
     */
    step?: number;
  };

  namespace models {
    /**
     * Lists models available through the API.
     */
    type IListParams = {
      /**
       * The maximum number of `Models` to return (per page). The service may return fewer models. If unspecified, at most 50 models will be returned per page. This method returns at most 1000 models per page, even if you pass a larger page_size.
       */
      pageSize?: number;
      /**
       * A page token, received from a previous `ListModels` call. Provide the `page_token` returned by one request as an argument to the next request to retrieve the next page. When paginating, all other parameters provided to `ListModels` must match the call that provided the page token.
       */
      pageToken?: string;
    };
  }

  namespace operations {
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    type IListParams = {
      /**
       * The standard list filter.
       */
      filter?: string;
      /**
       * The standard list page size.
       */
      pageSize?: number;
      /**
       * The standard list page token.
       */
      pageToken?: string;
    };
  }

  namespace tunedModels {
    namespace operations {
      /**
       * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
       */
      type IListParams = {
        /**
         * The standard list filter.
         */
        filter?: string;
        /**
         * The standard list page size.
         */
        pageSize?: number;
        /**
         * The standard list page token.
         */
        pageToken?: string;
      };
    }
  }
}

export default generativelanguage;

