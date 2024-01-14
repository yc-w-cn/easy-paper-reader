/**
 * Generative Language API
 */
declare namespace generativelanguage {
  /**
   * Identifier for the source contributing to this attribution.
   */
  type IAttributionSourceId = {
    /**
     * Identifier for an inline passage.
     */
    groundingPassage?: IGroundingPassageId;
    /**
     * Identifier for a `Chunk` fetched via Semantic Retriever.
     */
    semanticRetrieverChunk?: ISemanticRetrieverChunk;
  };

  /**
   * Request to batch create `Chunk`s.
   */
  type IBatchCreateChunksRequest = {
    /**
     * Required. The request messages specifying the `Chunk`s to create. A maximum of 100 `Chunk`s can be created in a batch.
     */
    requests?: Array<ICreateChunkRequest>;
  };

  /**
   * Response from `BatchCreateChunks` containing a list of created `Chunk`s.
   */
  type IBatchCreateChunksResponse = {
    /**
     * `Chunk`s created.
     */
    chunks?: Array<IChunk>;
  };

  /**
   * Request to batch delete `Chunk`s.
   */
  type IBatchDeleteChunksRequest = {
    /**
     * Required. The request messages specifying the `Chunk`s to delete.
     */
    requests?: Array<IDeleteChunkRequest>;
  };

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
   * Batch request to get a text embedding from the model.
   */
  type IBatchEmbedTextRequest = {
    /**
     * Optional. Embed requests for the batch. Only one of `texts` or `requests` can be set.
     */
    requests?: Array<IEmbedTextRequest>;
    /**
     * Optional. The free-form input texts that the model will turn into an embedding. The current limit is 100 texts, over which an error will be thrown.
     */
    texts?: Array<string>;
  };

  /**
   * The response to a EmbedTextRequest.
   */
  type IBatchEmbedTextResponse = {
    /**
     * Output only. The embeddings generated from the input text.
     */
    embeddings?: Array<IEmbedding>;
  };

  /**
   * Request to batch update `Chunk`s.
   */
  type IBatchUpdateChunksRequest = {
    /**
     * Required. The request messages specifying the `Chunk`s to update. A maximum of 100 `Chunk`s can be updated in a batch.
     */
    requests?: Array<IUpdateChunkRequest>;
  };

  /**
   * Response from `BatchUpdateChunks` containing a list of updated `Chunk`s.
   */
  type IBatchUpdateChunksResponse = {
    /**
     * `Chunk`s updated.
     */
    chunks?: Array<IChunk>;
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
     * Output only. Attribution information for sources that contributed to a grounded answer. This field is populated for `GenerateAnswer` calls.
     */
    groundingAttributions?: Array<IGroundingAttribution>;
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
   * A `Chunk` is a subpart of a `Document` that is treated as an independent unit for the purposes of vector representation and storage. A `Corpus` can have a maximum of 1 million `Chunk`s.
   */
  type IChunk = {
    /**
     * Output only. The Timestamp of when the `Chunk` was created.
     */
    createTime?: string;
    /**
     * Optional. User provided custom metadata stored as key-value pairs. The maximum number of `CustomMetadata` per chunk is 20.
     */
    customMetadata?: Array<ICustomMetadata>;
    /**
     * Required. The content for the `Chunk`, such as the text string. The maximum number of tokens per chunk is 2043.
     */
    data?: IChunkData;
    /**
     * Immutable. Identifier. The `Chunk` resource name. The ID (name excluding the "corpora/*\/documents/*\/chunks/" prefix) can contain up to 40 characters that are lowercase alphanumeric or dashes (-). The ID cannot start or end with a dash. If the name is empty on create, a random 12-character unique ID will be generated. Example: `corpora/{corpus_id}/documents/{document_id}/chunks/123a456b789c`
     */
    name?: string;
    /**
     * Output only. Current state of the `Chunk`.
     */
    state?:
      | 'STATE_UNSPECIFIED'
      | 'STATE_PENDING_PROCESSING'
      | 'STATE_ACTIVE'
      | 'STATE_FAILED';
    /**
     * Output only. The Timestamp of when the `Chunk` was last updated.
     */
    updateTime?: string;
  };

  /**
   * Extracted data that represents the `Chunk` content.
   */
  type IChunkData = {
    /**
     * The `Chunk` content as a string. The maximum number of tokens per chunk is 2043.
     */
    stringValue?: string;
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
   * Filter condition applicable to a single key.
   */
  type ICondition = {
    /**
     * The numeric value to filter the metadata on.
     */
    numericValue?: number;
    /**
     * Required. Operator applied to the given key-value pair to trigger the condition.
     */
    operation?:
      | 'OPERATOR_UNSPECIFIED'
      | 'LESS'
      | 'LESS_EQUAL'
      | 'EQUAL'
      | 'GREATER_EQUAL'
      | 'GREATER'
      | 'NOT_EQUAL'
      | 'INCLUDES'
      | 'EXCLUDES';
    /**
     * The string value to filter the metadata on.
     */
    stringValue?: string;
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
   * Content filtering metadata associated with processing a single request. ContentFilter contains a reason and an optional supporting string. The reason may be unspecified.
   */
  type IContentFilter = {
    /**
     * A string that describes the filtering behavior in more detail.
     */
    message?: string;
    /**
     * The reason content was blocked during request processing.
     */
    reason?: 'BLOCKED_REASON_UNSPECIFIED' | 'SAFETY' | 'OTHER';
  };

  /**
   * A `Corpus` is a collection of `Document`s. A project can create up to 5 corpora.
   */
  type ICorpus = {
    /**
     * Output only. The Timestamp of when the `Corpus` was created.
     */
    createTime?: string;
    /**
     * Optional. The human-readable display name for the `Corpus`. The display name must be no more than 512 characters in length, including spaces. Example: "Docs on Semantic Retriever"
     */
    displayName?: string;
    /**
     * Immutable. Identifier. The `Corpus` resource name. The ID (name excluding the "corpora/" prefix) can contain up to 40 characters that are lowercase alphanumeric or dashes (-). The ID cannot start or end with a dash. If the name is empty on create, a unique name will be derived from `display_name` along with a 12 character random suffix. Example: `corpora/my-awesome-corpora-123a456b789c`
     */
    name?: string;
    /**
     * Output only. The Timestamp of when the `Corpus` was last updated.
     */
    updateTime?: string;
  };

  /**
   * Counts the number of tokens in the `prompt` sent to a model. Models may tokenize text differently, so each model may return a different `token_count`.
   */
  type ICountMessageTokensRequest = {
    /**
     * Required. The prompt, whose token count is to be returned.
     */
    prompt?: IMessagePrompt;
  };

  /**
   * A response from `CountMessageTokens`. It returns the model's `token_count` for the `prompt`.
   */
  type ICountMessageTokensResponse = {
    /**
     * The number of tokens that the `model` tokenizes the `prompt` into. Always non-negative.
     */
    tokenCount?: number;
  };

  /**
   * Counts the number of tokens in the `prompt` sent to a model. Models may tokenize text differently, so each model may return a different `token_count`.
   */
  type ICountTextTokensRequest = {
    /**
     * Required. The free-form input text given to the model as a prompt.
     */
    prompt?: ITextPrompt;
  };

  /**
   * A response from `CountTextTokens`. It returns the model's `token_count` for the `prompt`.
   */
  type ICountTextTokensResponse = {
    /**
     * The number of tokens that the `model` tokenizes the `prompt` into. Always non-negative.
     */
    tokenCount?: number;
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
   * Request to create a `Chunk`.
   */
  type ICreateChunkRequest = {
    /**
     * Required. The `Chunk` to create.
     */
    chunk?: IChunk;
    /**
     * Required. The name of the `Document` where this `Chunk` will be created. Example: `corpora/my-corpus-123/documents/the-doc-abc`
     */
    parent?: string;
  };

  /**
   * User provided metadata stored as key-value pairs.
   */
  type ICustomMetadata = {
    /**
     * Required. The key of the metadata to store.
     */
    key?: string;
    /**
     * The numeric value of the metadata to store.
     */
    numericValue?: number;
    /**
     * The StringList value of the metadata to store.
     */
    stringListValue?: IStringList;
    /**
     * The string value of the metadata to store.
     */
    stringValue?: string;
  };

  /**
   * Dataset for training or validation.
   */
  type IDataset = {
    /**
     * Optional. Inline examples.
     */
    examples?: ITuningExamples;
  };

  /**
   * Request to delete a `Chunk`.
   */
  type IDeleteChunkRequest = {
    /**
     * Required. The resource name of the `Chunk` to delete. Example: `corpora/my-corpus-123/documents/the-doc-abc/chunks/some-chunk`
     */
    name?: string;
  };

  /**
   * A `Document` is a collection of `Chunk`s. A `Corpus` can have a maximum of 10,000 `Document`s.
   */
  type IDocument = {
    /**
     * Output only. The Timestamp of when the `Document` was created.
     */
    createTime?: string;
    /**
     * Optional. User provided custom metadata stored as key-value pairs used for querying. A `Document` can have a maximum of 20 `CustomMetadata`.
     */
    customMetadata?: Array<ICustomMetadata>;
    /**
     * Optional. The human-readable display name for the `Document`. The display name must be no more than 512 characters in length, including spaces. Example: "Semantic Retriever Documentation"
     */
    displayName?: string;
    /**
     * Immutable. Identifier. The `Document` resource name. The ID (name excluding the "corpora/*\/documents/" prefix) can contain up to 40 characters that are lowercase alphanumeric or dashes (-). The ID cannot start or end with a dash. If the name is empty on create, a unique name will be derived from `display_name` along with a 12 character random suffix. Example: `corpora/{corpus_id}/documents/my-awesome-doc-123a456b789c`
     */
    name?: string;
    /**
     * Output only. The Timestamp of when the `Document` was last updated.
     */
    updateTime?: string;
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
   * Request to get a text embedding from the model.
   */
  type IEmbedTextRequest = {
    /**
     * Required. The model name to use with the format model=models/{model}.
     */
    model?: string;
    /**
     * Optional. The free-form input text that the model will turn into an embedding.
     */
    text?: string;
  };

  /**
   * The response to a EmbedTextRequest.
   */
  type IEmbedTextResponse = {
    /**
     * Output only. The embedding generated from the input text.
     */
    embedding?: IEmbedding;
  };

  /**
   * A list of floats representing the embedding.
   */
  type IEmbedding = {
    /**
     * The embedding values.
     */
    value?: Array<number>;
  };

  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }
   */
  type IEmpty = {};

  /**
   * An input/output example used to instruct the Model. It demonstrates how the model should respond or format its response.
   */
  type IExample = {
    /**
     * Required. An example of an input `Message` from the user.
     */
    input?: IMessage;
    /**
     * Required. An example of what the model should output given the input.
     */
    output?: IMessage;
  };

  /**
   * A predicted `FunctionCall` returned from the model that contains a string representing the `FunctionDeclaration.name` with the arguments and their values.
   */
  type IFunctionCall = {
    /**
     * Optional. The function parameters and values in JSON object format.
     */
    args?: { [key: string]: any };
    /**
     * Required. The name of the function to call. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 63.
     */
    name?: string;
  };

  /**
   * Structured representation of a function declaration as defined by the [OpenAPI 3.03 specification](https://spec.openapis.org/oas/v3.0.3). Included in this declaration are the function name and parameters. This FunctionDeclaration is a representation of a block of code that can be used as a `Tool` by the model and executed by the client.
   */
  type IFunctionDeclaration = {
    /**
     * Required. A brief description of the function.
     */
    description?: string;
    /**
     * Required. The name of the function. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 63.
     */
    name?: string;
    /**
     * Optional. Describes the parameters to this function. Reflects the Open API 3.03 Parameter Object string Key: the name of the parameter. Parameter names are case sensitive. Schema Value: the Schema defining the type used for the parameter.
     */
    parameters?: ISchema;
  };

  /**
   * The result output from a `FunctionCall` that contains a string representing the `FunctionDeclaration.name` and a structured JSON object containing any output from the function is used as context to the model. This should contain the result of a`FunctionCall` made based on model prediction.
   */
  type IFunctionResponse = {
    /**
     * Required. The name of the function to call. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 63.
     */
    name?: string;
    /**
     * Required. The function response in JSON object format.
     */
    response?: { [key: string]: any };
  };

  /**
   * Request to generate a grounded answer from the model.
   */
  type IGenerateAnswerRequest = {
    /**
     * Required. Style in which answers should be returned.
     */
    answerStyle?:
      | 'ANSWER_STYLE_UNSPECIFIED'
      | 'ABSTRACTIVE'
      | 'EXTRACTIVE'
      | 'VERBOSE';
    /**
     * Required. The content of the current conversation with the model. For single-turn queries, this is a single question to answer. For multi-turn queries, this is a repeated field that contains conversation history and the last `Content` in the list containing the question. Note: GenerateAnswer currently only supports queries in English.
     */
    contents?: Array<IContent>;
    /**
     * Passages provided inline with the request.
     */
    inlinePassages?: IGroundingPassages;
    /**
     * Optional. A list of unique `SafetySetting` instances for blocking unsafe content. This will be enforced on the `GenerateAnswerRequest.contents` and `GenerateAnswerResponse.candidate`. There should not be more than one setting for each `SafetyCategory` type. The API will block any contents and responses that fail to meet the thresholds set by these settings. This list overrides the default settings for each `SafetyCategory` specified in the safety_settings. If there is no `SafetySetting` for a given `SafetyCategory` provided in the list, the API will use the default safety setting for that category.
     */
    safetySettings?: Array<ISafetySetting>;
    /**
     * Content retrieved from resources created via the Semantic Retriever API.
     */
    semanticRetriever?: ISemanticRetrieverConfig;
    /**
     * Optional. Controls the randomness of the output. Values can range from [0.0,1.0], inclusive. A value closer to 1.0 will produce responses that are more varied and creative, while a value closer to 0.0 will typically result in more straightforward responses from the model. A low temperature (~0.2) is usually recommended for Attributed-Question-Answering use cases.
     */
    temperature?: number;
  };

  /**
   * Response from the model for a grounded answer.
   */
  type IGenerateAnswerResponse = {
    /**
     * Candidate answer from the model. Note: The model *always* attempts to provide a grounded answer, even when the answer is unlikely to be answerable from the given passages. In that case, a low-quality or ungrounded answer may be provided, along with a low `answerable_probability`.
     */
    answer?: ICandidate;
    /**
     * Output only. The model's estimate of the probability that its answer is correct and grounded in the input passages. A low answerable_probability indicates that the answer might not be grounded in the sources. When `answerable_probability` is low, some clients may wish to: * Display a message to the effect of "We couldn’t answer that question" to the user. * Fall back to a general-purpose LLM that answers the question from world knowledge. The threshold and nature of such fallbacks will depend on individual clients’ use cases. 0.5 is a good starting threshold.
     */
    answerableProbability?: number;
  };

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
    /**
     * Optional. A list of `Tools` the model may use to generate the next response. A `Tool` is a piece of code that enables the system to interact with external systems to perform an action, or set of actions, outside of knowledge and scope of the model. The only supported tool is currently `Function`.
     */
    tools?: Array<ITool>;
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
   * Request to generate a message response from the model.
   */
  type IGenerateMessageRequest = {
    /**
     * Optional. The number of generated response messages to return. This value must be between `[1, 8]`, inclusive. If unset, this will default to `1`.
     */
    candidateCount?: number;
    /**
     * Required. The structured textual input given to the model as a prompt. Given a prompt, the model will return what it predicts is the next message in the discussion.
     */
    prompt?: IMessagePrompt;
    /**
     * Optional. Controls the randomness of the output. Values can range over `[0.0,1.0]`, inclusive. A value closer to `1.0` will produce responses that are more varied, while a value closer to `0.0` will typically result in less surprising responses from the model.
     */
    temperature?: number;
    /**
     * Optional. The maximum number of tokens to consider when sampling. The model uses combined Top-k and nucleus sampling. Top-k sampling considers the set of `top_k` most probable tokens.
     */
    topK?: number;
    /**
     * Optional. The maximum cumulative probability of tokens to consider when sampling. The model uses combined Top-k and nucleus sampling. Nucleus sampling considers the smallest set of tokens whose probability sum is at least `top_p`.
     */
    topP?: number;
  };

  /**
   * The response from the model. This includes candidate messages and conversation history in the form of chronologically-ordered messages.
   */
  type IGenerateMessageResponse = {
    /**
     * Candidate response messages from the model.
     */
    candidates?: Array<IMessage>;
    /**
     * A set of content filtering metadata for the prompt and response text. This indicates which `SafetyCategory`(s) blocked a candidate from this response, the lowest `HarmProbability` that triggered a block, and the HarmThreshold setting for that category.
     */
    filters?: Array<IContentFilter>;
    /**
     * The conversation history used by the model.
     */
    messages?: Array<IMessage>;
  };

  /**
   * Request to generate a text completion response from the model.
   */
  type IGenerateTextRequest = {
    /**
     * Optional. Number of generated responses to return. This value must be between [1, 8], inclusive. If unset, this will default to 1.
     */
    candidateCount?: number;
    /**
     * Optional. The maximum number of tokens to include in a candidate. If unset, this will default to output_token_limit specified in the `Model` specification.
     */
    maxOutputTokens?: number;
    /**
     * Required. The free-form input text given to the model as a prompt. Given a prompt, the model will generate a TextCompletion response it predicts as the completion of the input text.
     */
    prompt?: ITextPrompt;
    /**
     * Optional. A list of unique `SafetySetting` instances for blocking unsafe content. that will be enforced on the `GenerateTextRequest.prompt` and `GenerateTextResponse.candidates`. There should not be more than one setting for each `SafetyCategory` type. The API will block any prompts and responses that fail to meet the thresholds set by these settings. This list overrides the default settings for each `SafetyCategory` specified in the safety_settings. If there is no `SafetySetting` for a given `SafetyCategory` provided in the list, the API will use the default safety setting for that category. Harm categories HARM_CATEGORY_DEROGATORY, HARM_CATEGORY_TOXICITY, HARM_CATEGORY_VIOLENCE, HARM_CATEGORY_SEXUAL, HARM_CATEGORY_MEDICAL, HARM_CATEGORY_DANGEROUS are supported in text service.
     */
    safetySettings?: Array<ISafetySetting>;
    /**
     * The set of character sequences (up to 5) that will stop output generation. If specified, the API will stop at the first appearance of a stop sequence. The stop sequence will not be included as part of the response.
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
   * The response from the model, including candidate completions.
   */
  type IGenerateTextResponse = {
    /**
     * Candidate responses from the model.
     */
    candidates?: Array<ITextCompletion>;
    /**
     * A set of content filtering metadata for the prompt and response text. This indicates which `SafetyCategory`(s) blocked a candidate from this response, the lowest `HarmProbability` that triggered a block, and the HarmThreshold setting for that category. This indicates the smallest change to the `SafetySettings` that would be necessary to unblock at least 1 response. The blocking is configured by the `SafetySettings` in the request (or the default `SafetySettings` of the API).
     */
    filters?: Array<IContentFilter>;
    /**
     * Returns any safety feedback related to content filtering.
     */
    safetyFeedback?: Array<ISafetyFeedback>;
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
   * Attribution for a source that contributed to an answer.
   */
  type IGroundingAttribution = {
    /**
     * Grounding source content that makes up this attribution.
     */
    content?: IContent;
    /**
     * Output only. Identifier for the source contributing to this attribution.
     */
    sourceId?: IAttributionSourceId;
  };

  /**
   * Passage included inline with a grounding configuration.
   */
  type IGroundingPassage = {
    /**
     * Content of the passage.
     */
    content?: IContent;
    /**
     * Identifier for the passage for attributing this passage in grounded answers.
     */
    id?: string;
  };

  /**
   * Identifier for a part within a `GroundingPassage`.
   */
  type IGroundingPassageId = {
    /**
     * Output only. Index of the part within the `GenerateAnswerRequest`'s `GroundingPassage.content`.
     */
    partIndex?: number;
    /**
     * Output only. ID of the passage matching the `GenerateAnswerRequest`'s `GroundingPassage.id`.
     */
    passageId?: string;
  };

  /**
   * A repeated list of passages.
   */
  type IGroundingPassages = {
    /**
     * List of passages.
     */
    passages?: Array<IGroundingPassage>;
  };

  /**
   * Hyperparameters controlling the tuning process.
   */
  type IHyperparameters = {
    /**
     * Immutable. The batch size hyperparameter for tuning. If not set, a default of 16 or 64 will be used based on the number of training examples.
     */
    batchSize?: number;
    /**
     * Immutable. The number of training epochs. An epoch is one pass through the training data. If not set, a default of 10 will be used.
     */
    epochCount?: number;
    /**
     * Immutable. The learning rate hyperparameter for tuning. If not set, a default of 0.0002 or 0.002 will be calculated based on the number of training examples.
     */
    learningRate?: number;
  };

  /**
   * Response from `ListChunks` containing a paginated list of `Chunk`s. The `Chunk`s are sorted by ascending `chunk.create_time`.
   */
  type IListChunksResponse = {
    /**
     * The returned `Chunk`s.
     */
    chunks?: Array<IChunk>;
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no more pages.
     */
    nextPageToken?: string;
  };

  /**
   * Response from `ListCorpora` containing a paginated list of `Corpora`. The results are sorted by ascending `corpus.create_time`.
   */
  type IListCorporaResponse = {
    /**
     * The returned corpora.
     */
    corpora?: Array<ICorpus>;
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no more pages.
     */
    nextPageToken?: string;
  };

  /**
   * Response from `ListDocuments` containing a paginated list of `Document`s. The `Document`s are sorted by ascending `document.create_time`.
   */
  type IListDocumentsResponse = {
    /**
     * The returned `Document`s.
     */
    documents?: Array<IDocument>;
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no more pages.
     */
    nextPageToken?: string;
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
   * Response from `ListPermissions` containing a paginated list of permissions.
   */
  type IListPermissionsResponse = {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no more pages.
     */
    nextPageToken?: string;
    /**
     * Returned permissions.
     */
    permissions?: Array<IPermission>;
  };

  /**
   * Response from `ListTunedModels` containing a paginated list of Models.
   */
  type IListTunedModelsResponse = {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no more pages.
     */
    nextPageToken?: string;
    /**
     * The returned Models.
     */
    tunedModels?: Array<ITunedModel>;
  };

  /**
   * The base unit of structured text. A `Message` includes an `author` and the `content` of the `Message`. The `author` is used to tag messages when they are fed to the model as text.
   */
  type IMessage = {
    /**
     * Optional. The author of this Message. This serves as a key for tagging the content of this Message when it is fed to the model as text. The author can be any alphanumeric string.
     */
    author?: string;
    /**
     * Output only. Citation information for model-generated `content` in this `Message`. If this `Message` was generated as output from the model, this field may be populated with attribution information for any text included in the `content`. This field is used only on output.
     */
    citationMetadata?: ICitationMetadata;
    /**
     * Required. The text content of the structured `Message`.
     */
    content?: string;
  };

  /**
   * All of the structured input text passed to the model as a prompt. A `MessagePrompt` contains a structured set of fields that provide context for the conversation, examples of user input/model output message pairs that prime the model to respond in different ways, and the conversation history or list of messages representing the alternating turns of the conversation between the user and the model.
   */
  type IMessagePrompt = {
    /**
     * Optional. Text that should be provided to the model first to ground the response. If not empty, this `context` will be given to the model first before the `examples` and `messages`. When using a `context` be sure to provide it with every request to maintain continuity. This field can be a description of your prompt to the model to help provide context and guide the responses. Examples: "Translate the phrase from English to French." or "Given a statement, classify the sentiment as happy, sad or neutral." Anything included in this field will take precedence over message history if the total input size exceeds the model's `input_token_limit` and the input request is truncated.
     */
    context?: string;
    /**
     * Optional. Examples of what the model should generate. This includes both user input and the response that the model should emulate. These `examples` are treated identically to conversation messages except that they take precedence over the history in `messages`: If the total input size exceeds the model's `input_token_limit` the input will be truncated. Items will be dropped from `messages` before `examples`.
     */
    examples?: Array<IExample>;
    /**
     * Required. A snapshot of the recent conversation history sorted chronologically. Turns alternate between two authors. If the total input size exceeds the model's `input_token_limit` the input will be truncated: The oldest items will be dropped from `messages`.
     */
    messages?: Array<IMessage>;
  };

  /**
   * User provided filter to limit retrieval based on `Chunk` or `Document` level metadata values. Example (genre = drama OR genre = action): key = "document.custom_metadata.genre" conditions = [{string_value = "drama", operation = EQUAL}, {string_value = "action", operation = EQUAL}]
   */
  type IMetadataFilter = {
    /**
     * Required. The `Condition`s for the given key that will trigger this filter. Multiple `Condition`s are joined by logical ORs.
     */
    conditions?: Array<ICondition>;
    /**
     * Required. The key of the metadata to filter on.
     */
    key?: string;
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
     * A predicted `FunctionCall` returned from the model that contains a string representing the `FunctionDeclaration.name` with the arguments and their values.
     */
    functionCall?: IFunctionCall;
    /**
     * The result output of a `FunctionCall` that contains a string representing the `FunctionDeclaration.name` and a structured JSON object containing any output from the function is used as context to the model.
     */
    functionResponse?: IFunctionResponse;
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
   * Permission resource grants user, group or the rest of the world access to the PaLM API resource (e.g. a tuned model, corpus). A role is a collection of permitted operations that allows users to perform specific actions on PaLM API resources. To make them available to users, groups, or service accounts, you assign roles. When you assign a role, you grant permissions that the role contains. There are three concentric roles. Each role is a superset of the previous role's permitted operations: - reader can use the resource (e.g. tuned model, corpus) for inference - writer has reader's permissions and additionally can edit and share - owner has writer's permissions and additionally can delete
   */
  type IPermission = {
    /**
     * Optional. Immutable. The email address of the user of group which this permission refers. Field is not set when permission's grantee type is EVERYONE.
     */
    emailAddress?: string;
    /**
     * Optional. Immutable. The type of the grantee.
     */
    granteeType?: 'GRANTEE_TYPE_UNSPECIFIED' | 'USER' | 'GROUP' | 'EVERYONE';
    /**
     * Output only. Identifier. The permission name. A unique name will be generated on create. Examples: tunedModels/{tuned_model}/permissions/{permission} corpora/{corpus}/permissions/{permission} Output only.
     */
    name?: string;
    /**
     * Required. The role granted by this permission.
     */
    role?: 'ROLE_UNSPECIFIED' | 'OWNER' | 'WRITER' | 'READER';
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
   * Request for querying a `Corpus`.
   */
  type IQueryCorpusRequest = {
    /**
     * Optional. Filter for `Chunk` and `Document` metadata. Each `MetadataFilter` object should correspond to a unique key. Multiple `MetadataFilter` objects are joined by logical "AND"s. Example query at document level: (year >= 2020 OR year < 2010) AND (genre = drama OR genre = action) `MetadataFilter` object list: metadata_filters = [ {key = "document.custom_metadata.year" conditions = [{int_value = 2020, operation = GREATER_EQUAL}, {int_value = 2010, operation = LESS}]}, {key = "document.custom_metadata.year" conditions = [{int_value = 2020, operation = GREATER_EQUAL}, {int_value = 2010, operation = LESS}]}, {key = "document.custom_metadata.genre" conditions = [{string_value = "drama", operation = EQUAL}, {string_value = "action", operation = EQUAL}]}] Example query at chunk level for a numeric range of values: (year > 2015 AND year <= 2020) `MetadataFilter` object list: metadata_filters = [ {key = "chunk.custom_metadata.year" conditions = [{int_value = 2015, operation = GREATER}]}, {key = "chunk.custom_metadata.year" conditions = [{int_value = 2020, operation = LESS_EQUAL}]}] Note: "AND"s for the same key are only supported for numeric values. String values only support "OR"s for the same key.
     */
    metadataFilters?: Array<IMetadataFilter>;
    /**
     * Required. Query string to perform semantic search.
     */
    query?: string;
    /**
     * Optional. The maximum number of `Chunk`s to return. The service may return fewer `Chunk`s. If unspecified, at most 10 `Chunk`s will be returned. The maximum specified result count is 100.
     */
    resultsCount?: number;
  };

  /**
   * Response from `QueryCorpus` containing a list of relevant chunks.
   */
  type IQueryCorpusResponse = {
    /**
     * The relevant chunks.
     */
    relevantChunks?: Array<IRelevantChunk>;
  };

  /**
   * Request for querying a `Document`.
   */
  type IQueryDocumentRequest = {
    /**
     * Optional. Filter for `Chunk` metadata. Each `MetadataFilter` object should correspond to a unique key. Multiple `MetadataFilter` objects are joined by logical "AND"s. Note: `Document`-level filtering is not supported for this request because a `Document` name is already specified. Example query: (year >= 2020 OR year < 2010) AND (genre = drama OR genre = action) `MetadataFilter` object list: metadata_filters = [ {key = "chunk.custom_metadata.year" conditions = [{int_value = 2020, operation = GREATER_EQUAL}, {int_value = 2010, operation = LESS}}, {key = "chunk.custom_metadata.genre" conditions = [{string_value = "drama", operation = EQUAL}, {string_value = "action", operation = EQUAL}}] Example query for a numeric range of values: (year > 2015 AND year <= 2020) `MetadataFilter` object list: metadata_filters = [ {key = "chunk.custom_metadata.year" conditions = [{int_value = 2015, operation = GREATER}]}, {key = "chunk.custom_metadata.year" conditions = [{int_value = 2020, operation = LESS_EQUAL}]}] Note: "AND"s for the same key are only supported for numeric values. String values only support "OR"s for the same key.
     */
    metadataFilters?: Array<IMetadataFilter>;
    /**
     * Required. Query string to perform semantic search.
     */
    query?: string;
    /**
     * Optional. The maximum number of `Chunk`s to return. The service may return fewer `Chunk`s. If unspecified, at most 10 `Chunk`s will be returned. The maximum specified result count is 100.
     */
    resultsCount?: number;
  };

  /**
   * Response from `QueryDocument` containing a list of relevant chunks.
   */
  type IQueryDocumentResponse = {
    /**
     * The returned relevant chunks.
     */
    relevantChunks?: Array<IRelevantChunk>;
  };

  /**
   * The information for a chunk relevant to a query.
   */
  type IRelevantChunk = {
    /**
     * `Chunk` associated with the query.
     */
    chunk?: IChunk;
    /**
     * `Chunk` relevance to the query.
     */
    chunkRelevanceScore?: number;
  };

  /**
   * Safety feedback for an entire request. This field is populated if content in the input and/or response is blocked due to safety settings. SafetyFeedback may not exist for every HarmCategory. Each SafetyFeedback will return the safety settings used by the request as well as the lowest HarmProbability that should be allowed in order to return a result.
   */
  type ISafetyFeedback = {
    /**
     * Safety rating evaluated from content.
     */
    rating?: ISafetyRating;
    /**
     * Safety settings applied to the request.
     */
    setting?: ISafetySetting;
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
   * The `Schema` object allows the definition of input and output data types. These types can be objects, but also primitives and arrays. Represents a select subset of an [OpenAPI 3.0 schema object](https://spec.openapis.org/oas/v3.0.3#schema).
   */
  type ISchema = {
    /**
     * Optional. A brief description of the parameter. This could contain examples of use. Parameter description may be formatted as Markdown.
     */
    description?: string;
    /**
     * Optional. Possible values of the element of Type.STRING with enum format. For example we can define an Enum Direction as : {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]}
     */
    enum?: Array<string>;
    /**
     * Optional. The format of the data. This is used obnly for primative datatypes. Supported formats: for NUMBER type: float, double for INTEGER type: int32, int64
     */
    format?: string;
    /**
     * Optional. Schema of the elements of Type.ARRAY.
     */
    items?: ISchema;
    /**
     * Optional. Indicates if the value may be null.
     */
    nullable?: boolean;
    /**
     * Optional. Properties of Type.OBJECT.
     */
    properties?: { [key: string]: ISchema };
    /**
     * Optional. Required properties of Type.OBJECT.
     */
    required?: Array<string>;
    /**
     * Required. Data type.
     */
    type?:
      | 'TYPE_UNSPECIFIED'
      | 'STRING'
      | 'NUMBER'
      | 'INTEGER'
      | 'BOOLEAN'
      | 'ARRAY'
      | 'OBJECT';
  };

  /**
   * Identifier for a `Chunk` retrieved via Semantic Retriever specified in the `GenerateAnswerRequest` using `SemanticRetrieverConfig`.
   */
  type ISemanticRetrieverChunk = {
    /**
     * Output only. Name of the `Chunk` containing the attributed text. Example: `corpora/123/documents/abc/chunks/xyz`
     */
    chunk?: string;
    /**
     * Output only. Name of the source matching the request's `SemanticRetrieverConfig.source`. Example: `corpora/123` or `corpora/123/documents/abc`
     */
    source?: string;
  };

  /**
   * Configuration for retrieving grounding content from a `Corpus` or `Document` created using the Semantic Retriever API.
   */
  type ISemanticRetrieverConfig = {
    /**
     * Optional. Maximum number of relevant `Chunk`s to retrieve.
     */
    maxChunksCount?: number;
    /**
     * Optional. Filters for selecting `Document`s and/or `Chunk`s from the resource.
     */
    metadataFilters?: Array<IMetadataFilter>;
    /**
     * Optional. Minimum relevance score for retrieved relevant `Chunk`s.
     */
    minimumRelevanceScore?: number;
    /**
     * Required. Query to use for similarity matching `Chunk`s in the given resource.
     */
    query?: IContent;
    /**
     * Required. Name of the resource for retrieval, e.g. corpora/123 or corpora/123/documents/abc.
     */
    source?: string;
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
   * User provided string values assigned to a single metadata key.
   */
  type IStringList = {
    /**
     * The string values of the metadata to store.
     */
    values?: Array<string>;
  };

  /**
   * Output text returned from a model.
   */
  type ITextCompletion = {
    /**
     * Output only. Citation information for model-generated `output` in this `TextCompletion`. This field may be populated with attribution information for any text included in the `output`.
     */
    citationMetadata?: ICitationMetadata;
    /**
     * Output only. The generated text returned from the model.
     */
    output?: string;
    /**
     * Ratings for the safety of a response. There is at most one rating per category.
     */
    safetyRatings?: Array<ISafetyRating>;
  };

  /**
   * Text given to the model as a prompt. The Model will use this TextPrompt to Generate a text completion.
   */
  type ITextPrompt = {
    /**
     * Required. The prompt text.
     */
    text?: string;
  };

  /**
   * Tool details that the model may use to generate response. A `Tool` is a piece of code that enables the system to interact with external systems to perform an action, or set of actions, outside of knowledge and scope of the model.
   */
  type ITool = {
    /**
     * Optional. A list of `FunctionDeclarations` available to the model that can be used for function calling. The model or system does not execute the function. Instead the defined function may be returned as a FunctionCall with arguments to the client side for execution. The model may decide to call a subset of these functions by populating FunctionCall in the response. The next conversation turn may contain a FunctionResponse with the [conent.role] "function" generation context for the next model turn.
     */
    functionDeclarations?: Array<IFunctionDeclaration>;
  };

  /**
   * Request to transfer the ownership of the tuned model.
   */
  type ITransferOwnershipRequest = {
    /**
     * Required. The email address of the user to whom the tuned model is being transferred to.
     */
    emailAddress?: string;
  };

  /**
   * Response from `TransferOwnership`.
   */
  type ITransferOwnershipResponse = {};

  /**
   * A fine-tuned model created using ModelService.CreateTunedModel.
   */
  type ITunedModel = {
    /**
     * Immutable. The name of the `Model` to tune. Example: `models/text-bison-001`
     */
    baseModel?: string;
    /**
     * Output only. The timestamp when this model was created.
     */
    createTime?: string;
    /**
     * Optional. A short description of this model.
     */
    description?: string;
    /**
     * Optional. The name to display for this model in user interfaces. The display name must be up to 40 characters including spaces.
     */
    displayName?: string;
    /**
     * Output only. The tuned model name. A unique name will be generated on create. Example: `tunedModels/az2mb0bpw6i` If display_name is set on create, the id portion of the name will be set by concatenating the words of the display_name with hyphens and adding a random portion for uniqueness. Example: display_name = "Sentence Translator" name = "tunedModels/sentence-translator-u3b7m"
     */
    name?: string;
    /**
     * Output only. The state of the tuned model.
     */
    state?: 'STATE_UNSPECIFIED' | 'CREATING' | 'ACTIVE' | 'FAILED';
    /**
     * Optional. Controls the randomness of the output. Values can range over `[0.0,1.0]`, inclusive. A value closer to `1.0` will produce responses that are more varied, while a value closer to `0.0` will typically result in less surprising responses from the model. This value specifies default to be the one used by the base model while creating the model.
     */
    temperature?: number;
    /**
     * Optional. For Top-k sampling. Top-k sampling considers the set of `top_k` most probable tokens. This value specifies default to be used by the backend while making the call to the model. This value specifies default to be the one used by the base model while creating the model.
     */
    topK?: number;
    /**
     * Optional. For Nucleus sampling. Nucleus sampling considers the smallest set of tokens whose probability sum is at least `top_p`. This value specifies default to be the one used by the base model while creating the model.
     */
    topP?: number;
    /**
     * Optional. TunedModel to use as the starting point for training the new model.
     */
    tunedModelSource?: ITunedModelSource;
    /**
     * Required. The tuning task that creates the tuned model.
     */
    tuningTask?: ITuningTask;
    /**
     * Output only. The timestamp when this model was updated.
     */
    updateTime?: string;
  };

  /**
   * Tuned model as a source for training a new model.
   */
  type ITunedModelSource = {
    /**
     * Output only. The name of the base `Model` this `TunedModel` was tuned from. Example: `models/text-bison-001`
     */
    baseModel?: string;
    /**
     * Immutable. The name of the `TunedModel` to use as the starting point for training the new model. Example: `tunedModels/my-tuned-model`
     */
    tunedModel?: string;
  };

  /**
   * A single example for tuning.
   */
  type ITuningExample = {
    /**
     * Required. The expected model output.
     */
    output?: string;
    /**
     * Optional. Text model input.
     */
    textInput?: string;
  };

  /**
   * A set of tuning examples. Can be training or validation data.
   */
  type ITuningExamples = {
    /**
     * Required. The examples. Example input can be for text or discuss, but all examples in a set must be of the same type.
     */
    examples?: Array<ITuningExample>;
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

  /**
   * Tuning tasks that create tuned models.
   */
  type ITuningTask = {
    /**
     * Output only. The timestamp when tuning this model completed.
     */
    completeTime?: string;
    /**
     * Immutable. Hyperparameters controlling the tuning process. If not provided, default values will be used.
     */
    hyperparameters?: IHyperparameters;
    /**
     * Output only. Metrics collected during tuning.
     */
    snapshots?: Array<ITuningSnapshot>;
    /**
     * Output only. The timestamp when tuning this model started.
     */
    startTime?: string;
    /**
     * Required. Input only. Immutable. The model training data.
     */
    trainingData?: IDataset;
  };

  /**
   * Request to update a `Chunk`.
   */
  type IUpdateChunkRequest = {
    /**
     * Required. The `Chunk` to update.
     */
    chunk?: IChunk;
    /**
     * Required. The list of fields to update. Currently, this only supports updating `custom_metadata` and `data`.
     */
    updateMask?: string;
  };

  namespace corpora {
    /**
     * Deletes a `Corpus`.
     */
    type IDeleteParams = {
      /**
       * Optional. If set to true, any `Document`s and objects related to this `Corpus` will also be deleted. If false (the default), a `FAILED_PRECONDITION` error will be returned if `Corpus` contains any `Document`s.
       */
      force?: boolean;
    };

    /**
     * Lists all `Corpora` owned by the user.
     */
    type IListParams = {
      /**
       * Optional. The maximum number of `Corpora` to return (per page). The service may return fewer `Corpora`. If unspecified, at most 10 `Corpora` will be returned. The maximum size limit is 20 `Corpora` per page.
       */
      pageSize?: number;
      /**
       * Optional. A page token, received from a previous `ListCorpora` call. Provide the `next_page_token` returned in the response as an argument to the next request to retrieve the next page. When paginating, all other parameters provided to `ListCorpora` must match the call that provided the page token.
       */
      pageToken?: string;
    };

    /**
     * Updates a `Corpus`.
     */
    type IPatchParams = {
      /**
       * Required. The list of fields to update. Currently, this only supports updating `display_name`.
       */
      updateMask?: string;
    };

    namespace documents {
      /**
       * Deletes a `Document`.
       */
      type IDeleteParams = {
        /**
         * Optional. If set to true, any `Chunk`s and objects related to this `Document` will also be deleted. If false (the default), a `FAILED_PRECONDITION` error will be returned if `Document` contains any `Chunk`s.
         */
        force?: boolean;
      };

      /**
       * Lists all `Document`s in a `Corpus`.
       */
      type IListParams = {
        /**
         * Optional. The maximum number of `Document`s to return (per page). The service may return fewer `Document`s. If unspecified, at most 10 `Document`s will be returned. The maximum size limit is 20 `Document`s per page.
         */
        pageSize?: number;
        /**
         * Optional. A page token, received from a previous `ListDocuments` call. Provide the `next_page_token` returned in the response as an argument to the next request to retrieve the next page. When paginating, all other parameters provided to `ListDocuments` must match the call that provided the page token.
         */
        pageToken?: string;
      };

      /**
       * Updates a `Document`.
       */
      type IPatchParams = {
        /**
         * Required. The list of fields to update. Currently, this only supports updating `display_name` and `custom_metadata`.
         */
        updateMask?: string;
      };

      namespace chunks {
        /**
         * Lists all `Chunk`s in a `Document`.
         */
        type IListParams = {
          /**
           * Optional. The maximum number of `Chunk`s to return (per page). The service may return fewer `Chunk`s. If unspecified, at most 10 `Chunk`s will be returned. The maximum size limit is 100 `Chunk`s per page.
           */
          pageSize?: number;
          /**
           * Optional. A page token, received from a previous `ListChunks` call. Provide the `next_page_token` returned in the response as an argument to the next request to retrieve the next page. When paginating, all other parameters provided to `ListChunks` must match the call that provided the page token.
           */
          pageToken?: string;
        };

        /**
         * Updates a `Chunk`.
         */
        type IPatchParams = {
          /**
           * Required. The list of fields to update. Currently, this only supports updating `custom_metadata` and `data`.
           */
          updateMask?: string;
        };
      }
    }

    namespace permissions {
      /**
       * Lists permissions for the specific resource.
       */
      type IListParams = {
        /**
         * Optional. The maximum number of `Permission`s to return (per page). The service may return fewer permissions. If unspecified, at most 10 permissions will be returned. This method returns at most 1000 permissions per page, even if you pass larger page_size.
         */
        pageSize?: number;
        /**
         * Optional. A page token, received from a previous `ListPermissions` call. Provide the `page_token` returned by one request as an argument to the next request to retrieve the next page. When paginating, all other parameters provided to `ListPermissions` must match the call that provided the page token.
         */
        pageToken?: string;
      };

      /**
       * Updates the permission.
       */
      type IPatchParams = {
        /**
         * Required. The list of fields to update. Accepted ones: - role (`Permission.role` field)
         */
        updateMask?: string;
      };
    }
  }

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

  namespace tunedModels {
    /**
     * Creates a tuned model. Intermediate tuning progress (if any) is accessed through the [google.longrunning.Operations] service. Status and results can be accessed through the Operations service. Example: GET /v1/tunedModels/az2mb0bpw6i/operations/000-111-222
     */
    type ICreateParams = {
      /**
       * Optional. The unique id for the tuned model if specified. This value should be up to 40 characters, the first character must be a letter, the last could be a letter or a number. The id must match the regular expression: [a-z]([a-z0-9-]{0,38}[a-z0-9])?.
       */
      tunedModelId?: string;
    };

    /**
     * Lists tuned models owned by the user.
     */
    type IListParams = {
      /**
       * Optional. A filter is a full text search over the tuned model's description and display name. By default, results will not include tuned models shared with everyone. Additional operators: - owner:me - writers:me - readers:me - readers:everyone Examples: "owner:me" returns all tuned models to which caller has owner role "readers:me" returns all tuned models to which caller has reader role "readers:everyone" returns all tuned models that are shared with everyone
       */
      filter?: string;
      /**
       * Optional. The maximum number of `TunedModels` to return (per page). The service may return fewer tuned models. If unspecified, at most 10 tuned models will be returned. This method returns at most 1000 models per page, even if you pass a larger page_size.
       */
      pageSize?: number;
      /**
       * Optional. A page token, received from a previous `ListTunedModels` call. Provide the `page_token` returned by one request as an argument to the next request to retrieve the next page. When paginating, all other parameters provided to `ListTunedModels` must match the call that provided the page token.
       */
      pageToken?: string;
    };

    /**
     * Updates a tuned model.
     */
    type IPatchParams = {
      /**
       * Required. The list of fields to update.
       */
      updateMask?: string;
    };

    namespace permissions {
      /**
       * Lists permissions for the specific resource.
       */
      type IListParams = {
        /**
         * Optional. The maximum number of `Permission`s to return (per page). The service may return fewer permissions. If unspecified, at most 10 permissions will be returned. This method returns at most 1000 permissions per page, even if you pass larger page_size.
         */
        pageSize?: number;
        /**
         * Optional. A page token, received from a previous `ListPermissions` call. Provide the `page_token` returned by one request as an argument to the next request to retrieve the next page. When paginating, all other parameters provided to `ListPermissions` must match the call that provided the page token.
         */
        pageToken?: string;
      };

      /**
       * Updates the permission.
       */
      type IPatchParams = {
        /**
         * Required. The list of fields to update. Accepted ones: - role (`Permission.role` field)
         */
        updateMask?: string;
      };
    }
  }
}

export default generativelanguage;

