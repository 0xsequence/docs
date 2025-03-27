var DatabeatTracker = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    Databeat: () => Databeat2,
    Ident: () => Ident,
    genSessionId: () => genSessionId,
    genUserId: () => genUserId,
    getStorageVal: () => getStorageVal,
    isBrowser: () => isBrowser
  });

  // src/rpc/proto/databeat.gen.ts
  var Databeat = class {
    hostname;
    fetch;
    path = "/rpc/Databeat/";
    constructor(hostname, fetch) {
      this.hostname = hostname;
      this.fetch = (input, init) => fetch(input, init);
    }
    url(name) {
      return this.hostname + this.path + name;
    }
    ping = (headers, signal) => {
      return this.fetch(
        this.url("Ping"),
        createHTTPRequest({}, headers, signal)
      ).then((res) => {
        return buildResponse(res).then((_data) => {
          return {
            status: _data.status
          };
        });
      }, (error) => {
        throw WebrpcRequestFailedError.new({ cause: `fetch(): ${error.message || ""}` });
      });
    };
    version = (headers, signal) => {
      return this.fetch(
        this.url("Version"),
        createHTTPRequest({}, headers, signal)
      ).then((res) => {
        return buildResponse(res).then((_data) => {
          return {
            version: _data.version
          };
        });
      }, (error) => {
        throw WebrpcRequestFailedError.new({ cause: `fetch(): ${error.message || ""}` });
      });
    };
    runtimeStatus = (headers, signal) => {
      return this.fetch(
        this.url("RuntimeStatus"),
        createHTTPRequest({}, headers, signal)
      ).then((res) => {
        return buildResponse(res).then((_data) => {
          return {
            status: _data.status
          };
        });
      }, (error) => {
        throw WebrpcRequestFailedError.new({ cause: `fetch(): ${error.message || ""}` });
      });
    };
    tick = (args, headers, signal) => {
      return this.fetch(
        this.url("Tick"),
        createHTTPRequest(args, headers, signal)
      ).then((res) => {
        return buildResponse(res).then((_data) => {
          return {
            ok: _data.ok
          };
        });
      }, (error) => {
        throw WebrpcRequestFailedError.new({ cause: `fetch(): ${error.message || ""}` });
      });
    };
    rawEvents = (args, headers, signal) => {
      return this.fetch(
        this.url("RawEvents"),
        createHTTPRequest(args, headers, signal)
      ).then((res) => {
        return buildResponse(res).then((_data) => {
          return {
            ok: _data.ok
          };
        });
      }, (error) => {
        throw WebrpcRequestFailedError.new({ cause: `fetch(): ${error.message || ""}` });
      });
    };
  };
  var createHTTPRequest = (body = {}, headers = {}, signal = null) => {
    return {
      method: "POST",
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify(body || {}),
      signal
    };
  };
  var buildResponse = (res) => {
    return res.text().then((text) => {
      let data;
      try {
        data = JSON.parse(text);
      } catch (error) {
        let message = "";
        if (error instanceof Error) {
          message = error.message;
        }
        throw WebrpcBadResponseError.new(
          {
            status: res.status,
            cause: `JSON.parse(): ${message}: response text: ${text}`
          }
        );
      }
      if (!res.ok) {
        const code = typeof data.code === "number" ? data.code : 0;
        throw (webrpcErrorByCode[code] || WebrpcError).new(data);
      }
      return data;
    });
  };
  var WebrpcError = class _WebrpcError extends Error {
    name;
    code;
    message;
    status;
    cause;
    /** @deprecated Use message instead of msg. Deprecated in webrpc v0.11.0. */
    msg;
    constructor(name, code, message, status, cause) {
      super(message);
      this.name = name || "WebrpcError";
      this.code = typeof code === "number" ? code : 0;
      this.message = message || `endpoint error ${this.code}`;
      this.msg = this.message;
      this.status = typeof status === "number" ? status : 0;
      this.cause = cause;
      Object.setPrototypeOf(this, _WebrpcError.prototype);
    }
    static new(payload) {
      return new this(payload.error, payload.code, payload.message || payload.msg, payload.status, payload.cause);
    }
  };
  var WebrpcEndpointError = class _WebrpcEndpointError extends WebrpcError {
    constructor(name = "WebrpcEndpoint", code = 0, message = "endpoint error", status = 0, cause) {
      super(name, code, message, status, cause);
      Object.setPrototypeOf(this, _WebrpcEndpointError.prototype);
    }
  };
  var WebrpcRequestFailedError = class _WebrpcRequestFailedError extends WebrpcError {
    constructor(name = "WebrpcRequestFailed", code = -1, message = "request failed", status = 0, cause) {
      super(name, code, message, status, cause);
      Object.setPrototypeOf(this, _WebrpcRequestFailedError.prototype);
    }
  };
  var WebrpcBadRouteError = class _WebrpcBadRouteError extends WebrpcError {
    constructor(name = "WebrpcBadRoute", code = -2, message = "bad route", status = 0, cause) {
      super(name, code, message, status, cause);
      Object.setPrototypeOf(this, _WebrpcBadRouteError.prototype);
    }
  };
  var WebrpcBadMethodError = class _WebrpcBadMethodError extends WebrpcError {
    constructor(name = "WebrpcBadMethod", code = -3, message = "bad method", status = 0, cause) {
      super(name, code, message, status, cause);
      Object.setPrototypeOf(this, _WebrpcBadMethodError.prototype);
    }
  };
  var WebrpcBadRequestError = class _WebrpcBadRequestError extends WebrpcError {
    constructor(name = "WebrpcBadRequest", code = -4, message = "bad request", status = 0, cause) {
      super(name, code, message, status, cause);
      Object.setPrototypeOf(this, _WebrpcBadRequestError.prototype);
    }
  };
  var WebrpcBadResponseError = class _WebrpcBadResponseError extends WebrpcError {
    constructor(name = "WebrpcBadResponse", code = -5, message = "bad response", status = 0, cause) {
      super(name, code, message, status, cause);
      Object.setPrototypeOf(this, _WebrpcBadResponseError.prototype);
    }
  };
  var WebrpcServerPanicError = class _WebrpcServerPanicError extends WebrpcError {
    constructor(name = "WebrpcServerPanic", code = -6, message = "server panic", status = 0, cause) {
      super(name, code, message, status, cause);
      Object.setPrototypeOf(this, _WebrpcServerPanicError.prototype);
    }
  };
  var WebrpcInternalErrorError = class _WebrpcInternalErrorError extends WebrpcError {
    constructor(name = "WebrpcInternalError", code = -7, message = "internal error", status = 0, cause) {
      super(name, code, message, status, cause);
      Object.setPrototypeOf(this, _WebrpcInternalErrorError.prototype);
    }
  };
  var WebrpcClientDisconnectedError = class _WebrpcClientDisconnectedError extends WebrpcError {
    constructor(name = "WebrpcClientDisconnected", code = -8, message = "client disconnected", status = 0, cause) {
      super(name, code, message, status, cause);
      Object.setPrototypeOf(this, _WebrpcClientDisconnectedError.prototype);
    }
  };
  var WebrpcStreamLostError = class _WebrpcStreamLostError extends WebrpcError {
    constructor(name = "WebrpcStreamLost", code = -9, message = "stream lost", status = 0, cause) {
      super(name, code, message, status, cause);
      Object.setPrototypeOf(this, _WebrpcStreamLostError.prototype);
    }
  };
  var WebrpcStreamFinishedError = class _WebrpcStreamFinishedError extends WebrpcError {
    constructor(name = "WebrpcStreamFinished", code = -10, message = "stream finished", status = 0, cause) {
      super(name, code, message, status, cause);
      Object.setPrototypeOf(this, _WebrpcStreamFinishedError.prototype);
    }
  };
  var UnauthorizedError = class _UnauthorizedError extends WebrpcError {
    constructor(name = "Unauthorized", code = 1e3, message = "Unauthorized access", status = 0, cause) {
      super(name, code, message, status, cause);
      Object.setPrototypeOf(this, _UnauthorizedError.prototype);
    }
  };
  var PermissionDeniedError = class _PermissionDeniedError extends WebrpcError {
    constructor(name = "PermissionDenied", code = 2e3, message = "Permission denied", status = 0, cause) {
      super(name, code, message, status, cause);
      Object.setPrototypeOf(this, _PermissionDeniedError.prototype);
    }
  };
  var SessionExpiredError = class _SessionExpiredError extends WebrpcError {
    constructor(name = "SessionExpired", code = 2001, message = "Session expired", status = 0, cause) {
      super(name, code, message, status, cause);
      Object.setPrototypeOf(this, _SessionExpiredError.prototype);
    }
  };
  var NotFoundError = class _NotFoundError extends WebrpcError {
    constructor(name = "NotFound", code = 3e3, message = "Resource not found", status = 0, cause) {
      super(name, code, message, status, cause);
      Object.setPrototypeOf(this, _NotFoundError.prototype);
    }
  };
  var InvalidAppKeyError = class _InvalidAppKeyError extends WebrpcError {
    constructor(name = "InvalidAppKey", code = 4e3, message = "Invalid app key", status = 0, cause) {
      super(name, code, message, status, cause);
      Object.setPrototypeOf(this, _InvalidAppKeyError.prototype);
    }
  };
  var QueryFailedError = class _QueryFailedError extends WebrpcError {
    constructor(name = "QueryFailed", code = 4001, message = "DB query failed", status = 0, cause) {
      super(name, code, message, status, cause);
      Object.setPrototypeOf(this, _QueryFailedError.prototype);
    }
  };
  var InvalidProjectIdError = class _InvalidProjectIdError extends WebrpcError {
    constructor(name = "InvalidProjectId", code = 4002, message = "Invalid project id", status = 0, cause) {
      super(name, code, message, status, cause);
      Object.setPrototypeOf(this, _InvalidProjectIdError.prototype);
    }
  };
  var webrpcErrorByCode = {
    [0]: WebrpcEndpointError,
    [-1]: WebrpcRequestFailedError,
    [-2]: WebrpcBadRouteError,
    [-3]: WebrpcBadMethodError,
    [-4]: WebrpcBadRequestError,
    [-5]: WebrpcBadResponseError,
    [-6]: WebrpcServerPanicError,
    [-7]: WebrpcInternalErrorError,
    [-8]: WebrpcClientDisconnectedError,
    [-9]: WebrpcStreamLostError,
    [-10]: WebrpcStreamFinishedError,
    [1e3]: UnauthorizedError,
    [2e3]: PermissionDeniedError,
    [2001]: SessionExpiredError,
    [3e3]: NotFoundError,
    [4e3]: InvalidAppKeyError,
    [4001]: QueryFailedError,
    [4002]: InvalidProjectIdError
  };

  // src/rpc/proto/index.ts
  var DatabeatRpcClient = class extends Databeat {
    constructor(hostname, auth) {
      const globalFetch = globalThis.fetch.bind(globalThis);
      super(hostname.endsWith("/") ? hostname.slice(0, -1) : hostname, globalFetch);
      this.auth = auth;
      this._globalFetch = globalFetch;
      this.fetch = this._fetch;
    }
    _globalFetch;
    _fetch = (input, init) => {
      if (this.auth) {
        let headers = {};
        if (this.auth.jwt?.length > 0) {
          headers["Authorization"] = `BEARER ${this.auth.jwt}`;
        }
        if (this.auth.headers) {
          headers = { ...headers, ...this.auth.headers };
        }
        init.headers = { ...init.headers, ...headers };
      }
      return this._globalFetch(input, init);
    };
  };

  // node_modules/.pnpm/@noble+hashes@1.5.0/node_modules/@noble/hashes/esm/_assert.js
  function isBytes(a) {
    return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
  }
  function bytes(b, ...lengths) {
    if (!isBytes(b))
      throw new Error("Uint8Array expected");
    if (lengths.length > 0 && !lengths.includes(b.length))
      throw new Error(`Uint8Array expected of length ${lengths}, not of length=${b.length}`);
  }
  function exists(instance, checkFinished = true) {
    if (instance.destroyed)
      throw new Error("Hash instance has been destroyed");
    if (checkFinished && instance.finished)
      throw new Error("Hash#digest() has already been called");
  }
  function output(out, instance) {
    bytes(out);
    const min = instance.outputLen;
    if (out.length < min) {
      throw new Error(`digestInto() expects output buffer of length at least ${min}`);
    }
  }

  // node_modules/.pnpm/@noble+hashes@1.5.0/node_modules/@noble/hashes/esm/utils.js
  var createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
  var rotr = (word, shift) => word << 32 - shift | word >>> shift;
  var isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
  var hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
  function bytesToHex(bytes2) {
    bytes(bytes2);
    let hex = "";
    for (let i = 0; i < bytes2.length; i++) {
      hex += hexes[bytes2[i]];
    }
    return hex;
  }
  function utf8ToBytes(str) {
    if (typeof str !== "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str));
  }
  function toBytes(data) {
    if (typeof data === "string")
      data = utf8ToBytes(data);
    bytes(data);
    return data;
  }
  var Hash = class {
    // Safe version that clones internal state
    clone() {
      return this._cloneInto();
    }
  };
  var toStr = {}.toString;
  function wrapConstructor(hashCons) {
    const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = () => hashCons();
    return hashC;
  }

  // node_modules/.pnpm/@noble+hashes@1.5.0/node_modules/@noble/hashes/esm/_md.js
  function setBigUint64(view, byteOffset, value, isLE2) {
    if (typeof view.setBigUint64 === "function")
      return view.setBigUint64(byteOffset, value, isLE2);
    const _32n = BigInt(32);
    const _u32_max = BigInt(4294967295);
    const wh = Number(value >> _32n & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE2 ? 4 : 0;
    const l = isLE2 ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE2);
    view.setUint32(byteOffset + l, wl, isLE2);
  }
  var Chi = (a, b, c) => a & b ^ ~a & c;
  var Maj = (a, b, c) => a & b ^ a & c ^ b & c;
  var HashMD = class extends Hash {
    constructor(blockLen, outputLen, padOffset, isLE2) {
      super();
      this.blockLen = blockLen;
      this.outputLen = outputLen;
      this.padOffset = padOffset;
      this.isLE = isLE2;
      this.finished = false;
      this.length = 0;
      this.pos = 0;
      this.destroyed = false;
      this.buffer = new Uint8Array(blockLen);
      this.view = createView(this.buffer);
    }
    update(data) {
      exists(this);
      const { view, buffer, blockLen } = this;
      data = toBytes(data);
      const len = data.length;
      for (let pos = 0; pos < len; ) {
        const take = Math.min(blockLen - this.pos, len - pos);
        if (take === blockLen) {
          const dataView = createView(data);
          for (; blockLen <= len - pos; pos += blockLen)
            this.process(dataView, pos);
          continue;
        }
        buffer.set(data.subarray(pos, pos + take), this.pos);
        this.pos += take;
        pos += take;
        if (this.pos === blockLen) {
          this.process(view, 0);
          this.pos = 0;
        }
      }
      this.length += data.length;
      this.roundClean();
      return this;
    }
    digestInto(out) {
      exists(this);
      output(out, this);
      this.finished = true;
      const { buffer, view, blockLen, isLE: isLE2 } = this;
      let { pos } = this;
      buffer[pos++] = 128;
      this.buffer.subarray(pos).fill(0);
      if (this.padOffset > blockLen - pos) {
        this.process(view, 0);
        pos = 0;
      }
      for (let i = pos; i < blockLen; i++)
        buffer[i] = 0;
      setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE2);
      this.process(view, 0);
      const oview = createView(out);
      const len = this.outputLen;
      if (len % 4)
        throw new Error("_sha2: outputLen should be aligned to 32bit");
      const outLen = len / 4;
      const state = this.get();
      if (outLen > state.length)
        throw new Error("_sha2: outputLen bigger than state");
      for (let i = 0; i < outLen; i++)
        oview.setUint32(4 * i, state[i], isLE2);
    }
    digest() {
      const { buffer, outputLen } = this;
      this.digestInto(buffer);
      const res = buffer.slice(0, outputLen);
      this.destroy();
      return res;
    }
    _cloneInto(to) {
      to || (to = new this.constructor());
      to.set(...this.get());
      const { blockLen, buffer, length, finished, destroyed, pos } = this;
      to.length = length;
      to.pos = pos;
      to.finished = finished;
      to.destroyed = destroyed;
      if (length % blockLen)
        to.buffer.set(buffer);
      return to;
    }
  };

  // node_modules/.pnpm/@noble+hashes@1.5.0/node_modules/@noble/hashes/esm/sha256.js
  var SHA256_K = /* @__PURE__ */ new Uint32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]);
  var SHA256_IV = /* @__PURE__ */ new Uint32Array([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]);
  var SHA256_W = /* @__PURE__ */ new Uint32Array(64);
  var SHA256 = class extends HashMD {
    constructor() {
      super(64, 32, 8, false);
      this.A = SHA256_IV[0] | 0;
      this.B = SHA256_IV[1] | 0;
      this.C = SHA256_IV[2] | 0;
      this.D = SHA256_IV[3] | 0;
      this.E = SHA256_IV[4] | 0;
      this.F = SHA256_IV[5] | 0;
      this.G = SHA256_IV[6] | 0;
      this.H = SHA256_IV[7] | 0;
    }
    get() {
      const { A, B, C, D, E, F, G, H } = this;
      return [A, B, C, D, E, F, G, H];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
      this.A = A | 0;
      this.B = B | 0;
      this.C = C | 0;
      this.D = D | 0;
      this.E = E | 0;
      this.F = F | 0;
      this.G = G | 0;
      this.H = H | 0;
    }
    process(view, offset) {
      for (let i = 0; i < 16; i++, offset += 4)
        SHA256_W[i] = view.getUint32(offset, false);
      for (let i = 16; i < 64; i++) {
        const W15 = SHA256_W[i - 15];
        const W2 = SHA256_W[i - 2];
        const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
        const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
        SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
      }
      let { A, B, C, D, E, F, G, H } = this;
      for (let i = 0; i < 64; i++) {
        const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
        const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
        const sigma0 = rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22);
        const T2 = sigma0 + Maj(A, B, C) | 0;
        H = G;
        G = F;
        F = E;
        E = D + T1 | 0;
        D = C;
        C = B;
        B = A;
        A = T1 + T2 | 0;
      }
      A = A + this.A | 0;
      B = B + this.B | 0;
      C = C + this.C | 0;
      D = D + this.D | 0;
      E = E + this.E | 0;
      F = F + this.F | 0;
      G = G + this.G | 0;
      H = H + this.H | 0;
      this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
      SHA256_W.fill(0);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0);
      this.buffer.fill(0);
    }
  };
  var sha256 = /* @__PURE__ */ wrapConstructor(() => new SHA256());

  // src/index.ts
  var Ident = /* @__PURE__ */ ((Ident2) => {
    Ident2[Ident2["ANON"] = 0] = "ANON";
    Ident2[Ident2["PRIVATE"] = 1] = "PRIVATE";
    Ident2[Ident2["USER"] = 2] = "USER";
    return Ident2;
  })(Ident || {});
  var MAX_QUEUE_SIZE = 150;
  var defaultDatabeatOptions = {
    defaultEnabled: true,
    noop: false,
    privacy: { userIdHash: true, userAgentSalt: false },
    userIdentTracking: false,
    strictMode: false,
    flushInterval: 500,
    initProps: () => {
      return {};
    }
  };
  var Databeat2 = class {
    rpc;
    auth;
    options;
    enabled;
    ident;
    userId;
    sessionId;
    allowUserTracking;
    projectId;
    queue;
    flushTimeout;
    defaultProps;
    dedupeIdentKey;
    dedupeViewKey;
    ts;
    constructor(host, auth, options) {
      if (typeof auth === "string") {
        this.auth = { jwt: auth };
      } else {
        this.auth = auth;
      }
      this.rpc = new DatabeatRpcClient(host, this.auth);
      this.options = defaultDatabeatOptions;
      if (options) {
        this.options = {
          defaultEnabled: options.defaultEnabled || defaultDatabeatOptions.defaultEnabled,
          projectId: options.projectId || null,
          privacy: options.privacy || defaultDatabeatOptions.privacy,
          userIdentTracking: options.userIdentTracking || defaultDatabeatOptions.userIdentTracking,
          strictMode: options.strictMode || defaultDatabeatOptions.strictMode,
          flushInterval: options.flushInterval || defaultDatabeatOptions.flushInterval,
          noop: options.noop || false,
          initProps: options.initProps || defaultDatabeatOptions.initProps
        };
      }
      this.init();
    }
    // init is called on load by the constructor and also by reset().
    init() {
      this.enabled = isEnabled(this.options.defaultEnabled, this.auth);
      this.projectId = this.options.projectId || null;
      this.userId = null;
      this.sessionId = genSessionId();
      this.queue = [];
      this.flushTimeout = null;
      this.defaultProps = { ...getDefaultProps(), ...this.options.initProps() };
      this.identify();
    }
    // reset will reset the user_id and session_id details. Similar to a "logout" action.
    reset(skipInit) {
      this.enabled = isEnabled(this.options.defaultEnabled, this.auth);
      if (this.userId && !this.isAnon()) {
        this.userId = null;
      }
      this.ident = 0 /* ANON */;
      this.ts = setStorageVal({ on: this.enabled, id: this.userId, it: this.ident, ut: this.allowUserTracking });
      if (skipInit === true) {
        return;
      }
      this.init();
    }
    // identify can be called to seed the userId, where the behaviour changes
    // depending on privacy or strict modes. identify is also called on init,
    // where we load the data from localStorage.
    identify(userId, options) {
      if (!isBrowser()) return;
      if (options && options.allowTracking !== void 0) {
        this.allowTracking(options.allowTracking);
      }
      if (!userId) {
        const val = getStorageVal();
        if (val !== null && val.id !== null) {
          this.userId = val.id;
          this.ident = val.it;
          this.allowUserTracking = val.ut;
          if (val.it === void 0) {
            if (this.userId.startsWith("anon:")) {
              this.ident = 0 /* ANON */;
            } else {
              this.ident = 1 /* PRIVATE */;
            }
            this.ts = setStorageVal({ on: this.enabled, id: this.userId, it: this.ident, ut: this.allowUserTracking });
          } else {
            this.ident = val.it;
          }
        }
      }
      if (userId || this.userId === null) {
        const v = genUserId(userId, this.allowUserTracking, this.options);
        this.userId = v.userId;
        this.ident = v.ident;
        this.ts = setStorageVal({ on: this.enabled, id: this.userId, it: this.ident, ut: this.allowUserTracking });
      }
      const dedupeIdentKey = `${this.userId}:${this.sessionId}`;
      if (this.dedupeIdentKey === dedupeIdentKey) return;
      this.dedupeIdentKey = dedupeIdentKey;
      this.track({ event: "INIT", source: getPagePath(), props: this.defaultProps });
      this.flush();
    }
    // allowTracking is used by strict mode to enable/disable tracking.
    allowTracking(allowTracking) {
      this.allowUserTracking = allowTracking;
      setStorageVal({ on: this.enabled, id: this.userId, it: this.ident, ut: this.allowUserTracking });
      if (this.options.strictMode) {
        if (allowTracking) {
          this.enable();
        } else {
          this.disable();
        }
      }
    }
    async track(events, options) {
      if (isBrowser() && this.userId === null) {
        throw new Error("databeat: init first");
      }
      if (Array.isArray(events)) {
        for (let i = 0; i < events.length; i++) {
          events[i].ident = this.ident;
          events[i].userId = this.userId;
          events[i].sessionId = this.sessionId;
          if (!events[i].projectId && this.projectId) {
            events[i].projectId = this.projectId;
          }
        }
        this.queue.push(...events);
      } else {
        events.ident = this.ident;
        events.userId = this.userId;
        events.sessionId = this.sessionId;
        if (!events.projectId && this.projectId) {
          events.projectId = this.projectId;
        }
        this.queue.push(events);
      }
      if (this.queue.length > MAX_QUEUE_SIZE) {
        this.queue = this.queue.splice(this.queue.length - MAX_QUEUE_SIZE);
      }
      if (!this.enabled) return;
      if (options && options.flush) {
        await this.flush();
      } else if (this.flushTimeout === null) {
        this.flushTimeout = setTimeout(() => {
          this.flush();
        }, this.options.flushInterval);
      }
    }
    trackView(props = {}) {
      const eventProps = { ...this.defaultProps, ...props };
      const eventSource = getPagePath();
      const pageKey = `${eventSource}:${JSON.stringify(eventProps)}:${this.userId}:${this.sessionId}`;
      if (this.dedupeViewKey === pageKey) return;
      this.dedupeViewKey = pageKey;
      this.track({ event: "VIEW", source: eventSource, props: eventProps });
    }
    flush = async () => {
      if (this.flushTimeout !== null) {
        clearTimeout(this.flushTimeout);
        this.flushTimeout = null;
      }
      if (!this.enabled) return;
      if (this.options.noop) return;
      if (this.options.strictMode && !this.allowUserTracking) return;
      if (this.queue.length === 0) return;
      const events = this.dedupedQueue();
      this.queue = [];
      try {
        await this.rpc.tick({ events });
      } catch (err) {
        console.warn(`databeat flush failed: ${err}`);
      }
    };
    isEnabled() {
      return this.enabled;
    }
    isAnon() {
      return this.ident === 0 /* ANON */;
    }
    getIdent() {
      return this.ident;
    }
    getUserId() {
      return this.userId;
    }
    getSessionId() {
      return this.sessionId;
    }
    getStorageTS() {
      if (this.ts) {
        return this.ts;
      }
      const val = getStorageVal();
      if (val === void 0 || val === null || val.id === null) {
        return void 0;
      }
      this.ts = val.ts;
      return this.ts;
    }
    enable() {
      if (!isAuthEnabled(this.auth)) {
        this.enabled = false;
        return;
      }
      if (!isBrowser()) return;
      this.enabled = true;
      this.ts = setStorageVal({ on: this.enabled, id: this.userId, it: this.ident, ut: this.allowUserTracking });
      this.identify();
    }
    disable() {
      if (!isBrowser()) return;
      this.enabled = false;
      this.ts = setStorageVal({ on: this.enabled, id: this.userId, it: this.ident, ut: this.allowUserTracking });
    }
    dedupedQueue = () => {
      const uniqEvents = /* @__PURE__ */ new Map();
      for (let i = 0; i < this.queue.length; i++) {
        const ev = this.queue[i];
        const key = `${ev.event}:${ev.source}:${ev.userId}:${ev.sessionId}:${JSON.stringify(ev.props)}:${JSON.stringify(ev.nums)}`;
        if (!uniqEvents.has(key)) {
          uniqEvents.set(key, ev);
        }
      }
      return Array.from(uniqEvents.values());
    };
  };
  var isBrowser = () => {
    return typeof window === "object" && typeof window.localStorage === "object" && typeof window.localStorage.getItem === "function" && typeof window.localStorage.setItem === "function";
  };
  var isEnabled = (defaultEnabled, auth) => {
    if (!isAuthEnabled(auth)) {
      return false;
    }
    if (!isBrowser()) {
      return true;
    }
    const val = getStorageVal();
    if (val === null) {
      if (defaultEnabled !== null && defaultEnabled !== void 0) {
        return defaultEnabled;
      } else {
        return true;
      }
    } else {
      return val.on;
    }
  };
  var isAuthEnabled = (auth) => {
    if (auth?.jwt?.length > 0) {
      return true;
    }
    if (auth?.headers && Object.keys(auth.headers).length > 0) {
      return true;
    }
    return false;
  };
  var getPagePath = () => {
    try {
      return window.location.pathname;
    } catch (err) {
      return "";
    }
  };
  var getDefaultProps = () => {
    if (!isBrowser()) return {};
    const params = new URL(window.location.href).searchParams;
    const props = {};
    props["origin"] = window.location.origin;
    if (params.get("ref") && params.get("ref") !== "") {
      props["ref"] = params.get("ref") || "";
    }
    if (params.get("source") && params.get("source") !== "") {
      props["source"] = params.get("source") || "";
    }
    if (params.get("utm_source") && params.get("utm_source") !== "") {
      props["utmSource"] = params.get("utm_source") || "";
    }
    if (params.get("utm_campaign") && params.get("utm_campaign") !== "") {
      props["utmCampaign"] = params.get("utm_campaign") || "";
    }
    if (params.get("utm_medium") && params.get("utm_medium") !== "") {
      props["utmMedium"] = params.get("utm_medium") || "";
    }
    if (params.get("utm_content") && params.get("utm_content") !== "") {
      props["utmContent"] = params.get("utm_content") || "";
    }
    if (params.get("utm_term") && params.get("utm_term") !== "") {
      props["utmTerm"] = params.get("utm_term") || "";
    }
    if (document.referrer && document.referrer !== "") {
      props["referrer"] = document.referrer;
    }
    if (params.get("gclid") && params.get("gclid") !== "") {
      props["gclid"] = params.get("gclid") || "";
    }
    if (params.get("wbraid") && params.get("wbraid") !== "") {
      props["wbraid"] = params.get("wbraid") || "";
    }
    return props;
  };
  var storageKey = "_dbeat";
  var getStorageVal = () => {
    try {
      return JSON.parse(window.localStorage.getItem(storageKey));
    } catch (err) {
      return null;
    }
  };
  var setStorageVal = (val) => {
    try {
      if (!val.ts) {
        val.ts = Math.floor(Date.now() / 1e3);
      }
      window.localStorage.setItem(storageKey, JSON.stringify(val));
      return val.ts;
    } catch (err) {
      return;
    }
  };
  var genUserId = (seed, allowUserTracking, options) => {
    if (!seed || seed === null || seed === "") {
      const id = Math.floor(Math.random() * 1e14);
      return { userId: `${id}`, ident: 0 /* ANON */ };
    }
    if (options.userIdentTracking && allowUserTracking) {
      return { userId: seed, ident: 2 /* USER */ };
    }
    if (options.privacy.userIdHash === true || !options.userIdentTracking || !allowUserTracking) {
      if (isBrowser() && options.privacy.userAgentSalt === true) {
        seed = seed + ":" + navigator.userAgent;
      }
      if (options.privacy.extraSalt && options.privacy.extraSalt.length > 0) {
        seed = seed + ":" + options.privacy.extraSalt;
      }
      return { userId: bytesToHex(sha256(seed)).substring(0, 50), ident: 1 /* PRIVATE */ };
    } else {
      throw new Error("invalid configuration");
    }
  };
  var genSessionId = () => {
    const isSessionStorageAvail = isBrowser() && typeof window.sessionStorage === "object" && typeof window.sessionStorage.getItem === "function" && typeof window.sessionStorage.setItem === "function";
    if (!isSessionStorageAvail) {
      return genRandHex(16);
    } else {
      const sid = window.sessionStorage.getItem(storageKey);
      if (!!sid && sid.length > 0) {
        return sid;
      } else {
        const sid2 = genRandHex(16);
        window.sessionStorage.setItem(storageKey, sid2);
        return sid2;
      }
    }
  };
  var genRandHex = (n) => {
    let hexString = "";
    for (let i = 0; i < n; i++) {
      hexString += Math.floor(Math.random() * 16).toString(16);
    }
    return "0x" + hexString;
  };
  if (typeof process === "object" && process.version && process.version < "v18") {
    console.error(`ERROR! expecting node v18+ but your node version is reporting ${process.version}`);
    if (process && process.exit) {
      process.exit(1);
    }
  }
  return __toCommonJS(src_exports);
})();
/*! Bundled license information:

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/
//# sourceMappingURL=databeat-tracker.umd.js.map